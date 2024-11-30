import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as courseClient from "../Courses/client";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
            courses: any[]; course: any;
            setCourse: (course: any) => void;
            addNewCourse: () => void;
            deleteCourse: (course: any) => void;
            updateCourse: () => void;
            enrolling: boolean;
            setEnrolling: (enrolling: boolean) => void;
            updateEnrollment: (courseId: string, enrolled: boolean) => void;
        }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [isEnrollmentMode, setIsEnrollmentMode] = useState(false);
    const [displayedCourses, setDisplayedCourses] = useState<any[]>([]);

    const fetchDisplayedCourses = async () => {
        if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN" || isEnrollmentMode) {
            setDisplayedCourses(await courseClient.fetchAllCourses());
        } else {
            setDisplayedCourses(courses);
        }
    };

    useEffect(() => { fetchDisplayedCourses(); }, [courses, isEnrollmentMode]);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") &&
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5><br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr />
                </>
            }

            {currentUser.role === "STUDENT" &&
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            }

            <h4 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h4>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "270px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`} >
                                    <img src={course.img} width="100%" height={160} alt="Course" />
                                    <div className="card-body">
                                        <h6 className="wd-dashboard-course-title card-title">
                                            {course.name} </h6>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <small>
                                            <p className="wd-dashboard-course-title card-term-text">
                                                202410_1_Fall 2024 Semester Full Term
                                            </p>
                                        </small>
                                        <button className="btn btn-primary"> Go </button>

                                        {currentUser.role === "STUDENT" && enrolling && (
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                updateEnrollment(course._id, !course.enrolled);
                                            }}
                                                className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                {course.enrolled ? "Unenroll" : "Enroll"}
                                            </button>
                                        )}

                                        {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") &&
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </>
                                        }
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}