import React, { useState } from "react"; // import useState
export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John"); // declare and
    return ( // initialize
        <div> { /* state variable */}
            <h2>String State Variables</h2>
            <p>{firstName}</p> { /* render string */}
            <input /* state variable */
                className="form-control" /* initialize a */
                defaultValue={firstName} // text input field with the state variable
                onChange={(e) => setFirstName(e.target.value)} /> { /* update the state variable at each key stroke */}
            <hr />
        </div>
    );
}
