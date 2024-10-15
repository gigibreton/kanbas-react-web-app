import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import IndividualAssignmentControlButtons from "./IndividualAssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import GreenClipboard from "./GreenClipboard";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

// export default function Assignments() {
//     return (
//         <div>
//             <div className="d-flex justify-content-between align-items-center">
//                 <AssignmentControls /><br /><br />
//             </div>

//             <ul id="wd-modules" className="list-group-rounded-0">
//                 <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                             <BsGripVertical className="me-2 fs-2" />
//                             <span>ASSIGNMENTS</span>
//                         </div>
//                         <div className="d-flex align-items-center">
//                             <span className="oval-outline me-3">40% of Total</span>
//                             <AssignmentControlButtons />
//                         </div>
//                     </div>
//                     <ul className="wd-lesson list-group rounded-0">
//                         <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center">
//                             <div className="d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 <GreenClipboard />
//                                 <div>
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         <strong>A1</strong></a>
//                                     <small className="d-block">
//                                         <span style={{ color: 'red' }}>
//                                             Multiple Modules</span> |
//                                         <b> Not available until</b> May 6 at 12:00am |
//                                         <br /><b>Due</b> May 13 at 11:59pm | 100 pts
//                                     </small>
//                                 </div>
//                             </div>
//                             <div>
//                                 <IndividualAssignmentControlButtons />
//                             </div>
//                         </li>

//                         <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center">
//                             <div className="d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 <GreenClipboard />
//                                 <div>
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         <strong>A2</strong></a>
//                                     <small className="d-block">
//                                         <span style={{ color: 'red' }}>
//                                             Multiple Modules</span> |
//                                         <b> Not available until</b> May 13 at 12:00am |
//                                         <br /><b>Due</b> May 20 at 11:59pm | 100 pts
//                                     </small>
//                                 </div>
//                             </div>
//                             <div>
//                                 <IndividualAssignmentControlButtons />
//                             </div>
//                         </li>

//                         <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center">
//                             <div className="d-flex align-items-center">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 <GreenClipboard />
//                                 <div>
//                                     <a className="wd-assignment-link"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         <strong>A3</strong></a>
//                                     <small className="d-block">
//                                         <span style={{ color: 'red' }}>
//                                             Multiple Modules</span> |
//                                         <b> Not available until</b> May 20 at 12:00am |
//                                         <br /><b>Due</b> May 27 at 11:59pm | 100 pts
//                                     </small>
//                                 </div>
//                             </div>
//                             <div>
//                                 <IndividualAssignmentControlButtons />
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </ul >
//         </div >
//     );
// }

export default function Assignments() {
    const { cid } = useParams(); // Retrieve the course ID from the URL params
    const assignments = db.assignments;
    // Filter assignments for the current course
    const filteredAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <AssignmentControls /><br /><br />
            </div>

            <ul id="wd-modules" className="list-group-rounded-0">
                <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-2" />
                            <span>ASSIGNMENTS</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="oval-outline me-3">40% of Total</span>
                            <AssignmentControlButtons />
                        </div>
                    </div>

                    {/* Render assignments dynamically */}
                    <ul className="wd-lesson list-group rounded-0">
                        {filteredAssignments.map(assignment => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center">
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
                                            <b> Not available until</b> May 6 at 12:00am |
                                            <br /><b>Due</b> May 13 at 11:59pm | 100 pts
                                        </small>
                                    </div>
                                </div>
                                <div>
                                    <IndividualAssignmentControlButtons />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </div>
    );
}