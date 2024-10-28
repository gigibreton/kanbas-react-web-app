import React, { useState } from "react"; // import useState
export default function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date()); // declare and initialize with today's date
    const dateObjectToHtmlDateString = (date: Date) => { // utility function to convert date object
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${ // to YYYY-MM-DD format for HTML date
            date.getMonth() + 1 // picker
            }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    return (
        <div id="wd-date-state-variables">
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3> {/* display raw date object */}
            <input /* display in YYYY-MM-DD format for input */
                className="form-control" // of type date
                type="date"
                defaultValue={dateObjectToHtmlDateString(startDate)} // set HTML input type date
                onChange={(e) => setStartDate(new Date(e.target.value))} // update when you change the date with
            /> { /* the date picker */}
            <hr />
        </div>
    );
}
