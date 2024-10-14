import { Link } from "react-router-dom";
import * as db from "./../Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h4 id="wd-dashboard-published">Published Courses ({courses.length})</h4> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "270px " }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src={course.img} width="100%" height={160} />
                                    <div className="card-body">
                                        <h6 className="wd-dashboard-course-title card-title">
                                            {/* CS1234 12631 React JS SEC 01 Fall 2024 [BOS-1-TR] */}
                                            {course.name}
                                        </h6>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {/* CS1234.12631.202410 */}
                                            {course.description}
                                        </p>
                                        <small><p className="wd-dashboard-course-title card-term-text">
                                            202410_1_Fall 2024 Semester Full Term
                                        </p></small>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}