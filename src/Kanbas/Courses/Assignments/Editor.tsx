export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form id="wd-assignment-editor">
                <label htmlFor="wd-name"><h4>Assignment Name</h4></label>
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
                <textarea id="wd-description" cols={50} rows={15}>
                    The assignment is available online Submit a
                    link to the landing page of your Web
                    application running on Netlify. The landing
                    page should include the following: Your full
                    name and section Links to each of the lab
                    assignments Link to the Kanbas application
                    Links to all relevant source code repositories
                    The Kanbas application should include a link
                    to navigate back to the landing page.
                </textarea>
                <br />
                <table>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100} />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <br /><label htmlFor="wd-group">Assignment Group </label>
                            <select id="wd-group">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <br /><label htmlFor="wd-display-grade-as">Display Grade As </label>
                            <select id="wd-display-grade-as">
                                <option value="ASSIGNMENTS">Percentage</option>
                                <option value="QUIZZES">Number</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <br /><label htmlFor="wd-submission-type">Submission Type </label>
                            <select id="wd-submission-type">
                                <option value="ONLINE">Online</option>
                                <option value="IN-PERSON">In Person</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <br />
                            <label>Online Entry Options</label><br />

                            <input type="checkbox" name="check-submission-type" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="check-submission-type" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="check-submission-type" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input type="checkbox" name="check-submission-type" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input type="checkbox" name="check-submission-type" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <br />
                            <label htmlFor="wd-assign-to">Assigned to</label><br />
                            <input id="wd-assign-to" value="Everyone" /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top"><br />
                            <label htmlFor="wd-due-date">Due</label><br />
                            <input type="date"
                                id="wd-due-date"
                                value="2024-05-13" /><br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top"><br />
                            <label htmlFor="wd-available-from">Available From</label><br />
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                        </td>
                        <td valign="top"><br />
                            <label htmlFor="wd-available-until">Until</label><br />
                            <input type="date" id="wd-available-until" value="2024-05-20" />
                        </td>
                    </tr>
                </table>
            </form>
            <button id="wd-cancel" type="button">
                Cancel
            </button>
            <button id="wd-save" type="button">
                Save
            </button>
        </div>
    );
}
