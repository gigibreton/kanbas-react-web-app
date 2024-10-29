import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AssignmentControls = ({ cid = '' }) => {
    const navigate = useNavigate();
    return (
        <div id="wd-assignments" className="container-fluid mb-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-search-assignment"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                        <FaPlus className="me-1" />
                        Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}>
                        <FaPlus className="me-1" />
                        Assignment
                    </button>
                </div>
            </div>
        </div>
    );
}

AssignmentControls.defaultProps = {
    cid: undefined,
};

export default AssignmentControls;