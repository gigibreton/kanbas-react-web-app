import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "M001", name: "Getting Started with React",
        description: "Learn the basics of React",
        course: "React JS",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h5><b>Assignment</b></h5>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })} />
            <hr />
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <div className="f