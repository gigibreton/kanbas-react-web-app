import React, { useState } from "react"; // import useState
export default function BooleanStateVariables() {
    const [done, setDone] = useState(true); // declare and initialize
    return ( // boolean state variable
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            <p>{done ? "Done" : "Not done"}</p> { /* render content based on */}
            <label className="form-control"> { /* boolean state variable value */}
                <input type="checkbox" checked={done} /* change state variable value */
                    onChange={() => setDone(!done)} /> Done { /* when handling events like */}
            </label> { /* clicking a checkbox */}
            {done && <div className="alert alert-success"> { /* render content based on */}
                Yay! you are done</div>} { /* boolean state variable */}
            <hr />
        </div>
    );
}
