import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, addAssignment } from "../../Courses/Assignments/reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentsEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isReadOnly = currentUser.role === "STUDENT";
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [assignment, setAssignment] = useState<any>(aid === "new" ? {
        title: "",
        description: "",
        points: 100,
        group: "ASSIGNMENTS",
        displayGradeAs: "Percentage",
        submissionType: "Online",
        submissionOptions: {
            textEntry: "",
            websiteUrl: "",
            mediaRecordings: "",
            studentAnnotation: "",
            fileUpload: "",
        },
        assignTo: "Everyone",
        dueDate: "2024-12-31",
        availableDate: "2024-12-24",
        availableUntil: "2024-12-31",
    } : assignments.find((assignment: any) => assignment._id === aid));

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAssignment({ ...assignment, [e.target.name]: value });
    };

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        setAssignment((prevState: any) => ({
            ...prevState,
            submissionOptions: {
                ...prevState.submissionOptions,
                [name]: checked,
            },
        }));
    };

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = await coursesClient.createAssignmentForCourse(cid, assignment);
        dispatch(addAssignment(newAssignment));
    };

    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const handleSave = () => {
        if (aid === "new") {
            createAssignmentForCourse();
        } else {
            saveAssignment(assignment);
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    if (!assignment) {
        console.log(cid, aid);
        return <div>Loading...</div>;
    }

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-AssignmentsEditor
    " className="container">
            <form id="wd-assignment-AssignmentsEditor
        " onSubmit={handleSave} onAbort={handleCancel}>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        type="text"
                        className="form-control"
                        name="title"
                        value={assignment.title}
                        onChange={handleChange}
                        readOnly={isReadOnly} />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        name="description"
                        cols={50}
                        rows={15}
                        value={assignment.description}
                        onChange={handleChange}
                        readOnly={isReadOnly} />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input
                        id="wd-points"
                        type="number"
                        className="form-control"
                        name="points"
                        value={assignment.points}
                        onChange={handleChange}
                        readOnly={isReadOnly} />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-group"
                        className="form-select"
                        name="group"
                        value={assignment.group}
                        onChange={handleChange}
                        disabled={isReadOnly}>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                    <select id="wd-display-grade-as"
                        className="form-select"
                        name="displayGradeAs"
                        value={assignment.displayGradeAs}
                        onChange={handleChange}
                        disabled={isReadOnly}>
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="NUMBER">Number</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <div className="border rounded p-3 bg-transparent">
                        <select id="wd-submission-type"
                            className="form-select"
                            name="submissionType"
                            value={assignment.submissionType}
                            onChange={handleChange}
                            disabled={isReadOnly}>
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In Person</option>
                        </select>

                        <fieldset className="mb-3">
                            <legend className="col-form-label">Online Entry Options</legend>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-text-entry"
                                    name="textEntry"
                                    checked={assignment.submissionOptions.textEntry}
                                    onChange={handleCheckboxChange}
                                    disabled={isReadOnly} />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-website-url"
                                    name="websiteUrl"
                                    checked={assignment.submissionOptions.websiteUrl}
                                    onChange={handleCheckboxChange}
                                    disabled={isReadOnly} />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-media-recordings"
                                    name="mediaRecordings"
                                    checked={assignment.submissionOptions.mediaRecordings}
                                    onChange={handleCheckboxChange}
                                    disabled={isReadOnly} />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-student-annotation"
                                    name="studentAnnotation"
                                    checked={assignment.submissionOptions.studentAnnotation}
                                    onChange={handleCheckboxChange}
                                    disabled={isReadOnly} />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-file-upload"
                                    name="fileUpload"
                                    checked={assignment.submissionOptions.fileUpload}
                                    onChange={handleCheckboxChange}
                                    disabled={isReadOnly} />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-submission-type" className="form-label">Assign</label>
                    <div className="border rounded p-3 bg-transparent">
                        <label htmlFor="wd-assign-to" className="form-label"><h6>Assigned to</h6></label>
                        <input
                            id="wd-assign-to"
                            className="form-control"
                            name="assignTo"
                            value={assignment.assignTo}
                            onChange={handleChange}
                            readOnly={isReadOnly} />

                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                            <input
                                type="date"
                                id="wd-due-date"
                                name="dueDate"
                                className="form-control"
                                value={assignment.dueDate}
                                onChange={handleChange}
                                readOnly={isReadOnly} />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                <input
                                    type="date"
                                    id="wd-available-from"
                                    className="form-control"
                                    name="availableDate"
                                    value={assignment.availableDate}
                                    onChange={handleChange}
                                    readOnly={isReadOnly} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input
                                    type="date"
                                    id="wd-available-until"
                                    className="form-control"
                                    name="availableUntil"
                                    value={assignment.availableUntil}
                                    onChange={handleChange}
                                    readOnly={isReadOnly} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel" className="btn btn-secondary">
                        Cancel
                    </Link>
                    <button type="submit" id="wd-save" className="btn btn-danger" onClick={handleSave} disabled={isReadOnly} >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}