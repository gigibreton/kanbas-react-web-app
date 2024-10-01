export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <form id="wd-assignment-editor">
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">
                        Assignment Name
                    </label>
                    <input
                        id="wd-name"
                        type="text"
                        className="form-control"
                        defaultValue="A1 - ENV + HTML"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        cols={50}
                        rows={15}
                    >
                        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, a link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input
                        id="wd-points"
                        type="number"
                        className="form-control"
                        defaultValue={100}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="ASSIGNMENTS">Percentage</option>
                        <option value="QUIZZES">Number</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <div className="border rounded p-3 bg-transparent">
                        <select id="wd-submission-type" className="form-select">
                            <option value="ONLINE">Online</option>
                            <option value="IN-PERSON">In Person</option>
                        </select>

                        <fieldset className="mb-3">
                            <legend className="col-form-label">Online Entry Options</legend>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-file-upload" />
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
                            defaultValue="Everyone"
                        />

                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due</label>
                            <input
                                type="date"
                                id="wd-due-date"
                                className="form-control"
                                defaultValue="2024-05-13"
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                <input
                                    type="date"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue="2024-05-06"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input
                                    type="date"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue="2024-05-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button id="wd-cancel" type="button" className="btn btn-secondary">Cancel</button>
                    <button id="wd-save" type="button" className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}
