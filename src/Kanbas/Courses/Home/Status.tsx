import { IoMdHome } from "react-icons/io";
import { HiOutlineSave } from "react-icons/hi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoIosPodium } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdDoNotDisturbAlt, MdNotificationsActive } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button id="unpublish-btn" className="btn btn-lg btn-secondary w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish</button>
                </div>
                <div className="w-50">
                    <button id="publish-btn" className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish</button>
                </div>
            </div><br />
            <button id="import-existing-content-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <HiOutlineSave className="me-2 fs-5" /> Import Existing Content</button><br />
            <button id="import-from-commons-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons</button><br />
            <button id="choose-home-page-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <IoMdHome className="me-2 fs-5" /> Choose Home Page</button><br />
            <button id="view-course-streams-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <IoIosPodium className="me-2 fs-5" /> View Course Stream</button><br />
            <button id="new-announcement-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <TfiAnnouncement className="me-2 fs-5" /> New Announcement</button><br />
            <button id="new-analytics--btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <IoAnalyticsSharp className="me-2 fs-5" /> New Analytics</button><br />
            <button id="view-course-notifications-btn" className="btn btn-lg btn-secondary w-100 mt-1 text-star">
                <MdNotificationsActive className="me-2 fs-5" /> View Course Notifications</button>
        </div>
    );
}
