import { useEffect, useState, FormEvent } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../../Courses/Assignments/reducer";
import React from "react";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [assignment, setAssignment] = useState<null | typeof assignments[0]>(null);

    useEffect(() => {
        console.log(assignments);
        const foundAssignment = assignments.find(
            (assignment: any) => assignment.course === cid && assignment._id === aid
        );
        setAssignment(foundAssignment || null);
    }, [cid, aid]);

    const handleSave = (event: React.FormEvent) => {
        event.preventDefault();

        if (!assignment) {
            console.error("Assignment data is missing.");
            return;
        }

        const updatedAssignment = {
            ...assignment,
            title: (document.getElementById("wd-name") as HTMLInputElement)?.value || assignment.title,
            description: (document.getElementById("wd-description") as HTMLInputElement)?.value || assignment.description,
            points: Number((document.getElementById("wd-points") as HTMLInputElement)?.value) || assignment.points,
            group: (document.getElementById("wd-group") as HTMLInputElement)?.value || assignment.group,
            displayGradeAs: (document.getElementById("wd-display-grade-as") as HTMLInputElement)?.value || assignment.displayGradeAs,
            submissionType: (document.getElementById("wd-submission-type") as HTMLInputElement)?.value || assignment.submissionType,
            submissionOptions: {
                textEntry: (document.getElementById("wd-text-entry") as HTMLInputElement)?.checked ?? assignment.submissionOptions.textEntry,
                websiteUrl: (document.getElementById("wd-website-url") as HTMLInputElement)?.checked ?? assignment.submissionOptions.websiteUrl,
                mediaRecordings: (document.getElementById("wd-media-recordings") as HTMLInputElement)?.checked ?? assignment.submissionOptions.mediaRecordings,
                studentAnnotation: (document.getElementById("wd-student-annotation") as HTMLInputElement)?.checked ?? assignment.submissionOptions.studentAnnotation,
                fileUpload: (document.getElementById("wd-file-upload") as HTMLInputElement)?.checked ?? assignment.submissionOptions.fileUpload,
            },
            assignTo: (document.getElementById("wd-assign-to") as HTMLInputElement)?.value || assignment.assignTo,
            dueDate: (document.getElementById("wd-due-date") as HTMLInputElement)?.value || assignment.dueDate,
            availableDate: (document.getElementById("wd-available-from") as HTMLInputElement)?.value || assignment.availableDate,
            availableUntil: (document.getElementById("wd-available-until") as HTMLInputElement)?.value || assignment.availableUntil,
        };

        dispatch(updateAssignment(updatedAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    if (!assignment) {
        console.log(cid, aid);
        return <div>Loading...</div>;
    }

    return (
        <div id="wd-assignments-editor" className="container">
            <form id="wd-assignment-editor" onSubmit={handleSave}>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        type="text"
                        className="form-control"
                        defaultValue={assignment.title}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        cols={50}
                        rows={15}
                        defaultValue={assignment.description}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input
                        id="wd-points"
                        type="number"
                        className="form-control"
                        defaultValue={assignment.points}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-group"
                        className="form-select"
                        defaultValue={assignment.group}>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                    <select id="wd-display-grade-as"
                        className="form-select"
                        defaultValue={assignment.displayGradeAs}>
                        <option value="ASSIGNMENTS">Percentage</option>
                        <option value="QUIZZES">Number</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <div className="border rounded p-3 bg-transparent">
                        <select id="wd-submission-type"
                            className="form-select"
                            defaultValue={assignment.submissionType}>
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In Person</option>
                        </select>

                        <fieldset className="mb-3">
                            <legend className="col-form-label">Online Entry Options</legend>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-text-entry"
                                    defaultChecked={assignment.submissionOptions.textEntry} />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-website-url"
                                    defaultChecked={assignment.submissionOptions.websiteUrl} />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-media-recordings"
                                    defaultChecked={assignment.submissionOptions.mediaRecordings} />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-student-annotation"
                                    defaultChecked={assignment.submissionOptions.studentAnnotation} />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="wd-file-upload"
                                    defaultChecked={assignment.submissionOptions.fileUpload} />
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
                            defaultValue={assignment.assignTo}
                        />

                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                            <input
                                type="date"
                                id="wd-due-date"
                                className="form-control"
                                defaultValue={assignment.dueDate}
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                <input
                                    type="date"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue={assignment.availableDate}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input
                                    type="date"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue={assignment.availableUntil}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel" className="btn btn-secondary">
                        Cancel
                    </Link>
                    <button type="submit" id="wd-save" className="btn btn-danger">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
