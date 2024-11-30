import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import IndividualAssignmentControlButtons from "./IndividualAssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import GreenClipboard from "./GreenClipboard";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import { useEffect } from "react";
export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    return (
        <div>
            {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') && (
                <>
                    <div className="d-flex justify-content-between align-items-center">
                        <AssignmentControls cid={cid} /><br /><br />
                    </div>
                </>)}

            <ul id="wd-assignments" className="list-group-rounded-0">
                <div className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-2" />
                            <span>ASSIGNMENTS</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="oval-outline me-3">40% of Total</span>
                            {currentUser.role === 'FACULTY' && (
                                <>
                                    <AssignmentControlButtons />
                                </>)}
                        </div>
                    </div>

                    <ul className="wd-assignments list-group rounded-0">
                        {assignments.map((assignment: any) => (
                            <li key={assignment._id} className="wd-assignments list-group-item p-3 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <GreenClipboard />
                                    <div>
                                        <Link
                                            className="wd-assignment-link"
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            <strong>{assignment.title}</strong>
                                        </Link>
                                        <small className="d-block">
                                            <span style={{ color: 'red' }}>Multiple Modules</span> |
                                            <b> Not available until</b> {formatDate(assignment.availableDate)} |
                                            <br /><b>Due</b> {formatDate(assignment.availableUntil)} | {assignment.points} pts
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') && (
                                        <>
                                            <IndividualAssignmentControlButtons assignmentId={assignment._id}
                                                deleteAssignment={removeAssignment} />
                                        </>)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </div>
    );
}