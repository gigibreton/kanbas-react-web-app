import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" 
                        to="/Kanbas/Courses/1234/Home">CS1234 React JS</Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack Software Developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/mobileappdev.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5520/Home">CS5520 Mobile App Development</Link>
                        <p className="wd-dashboard-course-title">
                            Mobile App Development
                        </p>
                        <Link to="/Kanbas/Courses/5520/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/webdev.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5610/Home">CS5610 Web Development</Link>
                        <p className="wd-dashboard-course-title">
                            Web Development
                        </p>
                        <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/discrete.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5002/Home">CS5002 Discrete Structures</Link>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures
                        </p>
                        <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/ood.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5004/Home">CS5004 Object-Oriented Design</Link>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Design
                        </p>
                        <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/datastructures.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5008/Home">
                            CS5008 Data Structures, Algos, Comp Systems</Link>
                        <p className="wd-dashboard-course-title">
                            Data Structures, Algorithms, and Computer Systems
                        </p>
                        <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/programminglanguages.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5400/Home">CS5400 Programming Languages</Link>
                        <p className="wd-dashboard-course-title">
                            Programming Languages
                        </p>
                        <Link to="/Kanbas/Courses/5400/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}