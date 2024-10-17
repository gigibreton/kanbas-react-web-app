import React, { useState } from "react"; // import useState
export default function EventObject() { // (more on this later)
    const [event, setEvent] = useState(null); // initialize event
    const handleClick = (e: any) => { // on click receive event
        e.target = e.target.outerHTML; // replace target with HTML
        delete e.view; // to avoid circular reference
        setEvent(e); // set event object
    }; // so it can be displayed
    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={(e) => handleClick(e)} // button that triggers event
                className="btn btn-primary" // when clicked passes event
                id="wd-display-event-obj-click"> {/* to handler to update variable */}
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre> {/* convert event object into string to display */}
            <hr />
        </div>
    );
}
