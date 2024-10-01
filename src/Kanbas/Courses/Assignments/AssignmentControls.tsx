import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
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
                    <button id="wd-add-assignment" className="btn btn-danger">
                        <FaPlus className="me-1" />
                        Assignment
                    </button>
                </div>
            </div>
        </div>
    );
}