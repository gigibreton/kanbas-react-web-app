import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h4 id="wd-dashboard-published">Published Courses (12)</h4> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "270px " }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS1234 12631 React JS SEC 01 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS1234.12631.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5520/Home">
                                <img src="/images/mobileappdev.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5520 19753 Mobile App Development SEC 03 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5520.19753.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5610/Home">
                                <img src="/images/webdev.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5610 20040 Web Development SEC 02 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5610.20040.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5002/Home">
                                <img src="/images/discrete.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5002 41752 Discrete Structures SEC 06 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5002.41752.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5004/Home">
                                <img src="/images/blue.jpg.webp" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5004 11550 Object-Oriented Design SEC 04 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5004.11550.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5008/Home">
                                <img src="/images/datastructures.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5008 17387 Data Structures, Algos, Comp Systems SEC 03 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5008.17387.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5400/Home">
                                <img src="/images/programminglanguages.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">
                                        CS5400 17367 Programming Languages SEC 01 Fall 2024 [BOS-1-TR]
                                    </h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5400.17367.202410
                                    </p>
                                    <small><p className="wd-dashboard-course-title card-term-text">
                                        202410_1_Fall 2024 Semester Full Term
                                    </p></small>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}