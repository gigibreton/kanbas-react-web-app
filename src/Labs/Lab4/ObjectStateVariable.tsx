import React, { useState } from "react"; // import useState
export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 }); // declare and initialize object state
    return ( // variable with multiple fields
        <div>
            <h2>Object State Variables</h2> { /* display raw JSON */}
            <pre>{JSON.stringify(person, null, 2)}</pre> { /* initialize input field with an object's */}
            <input // field value
                defaultValue={person.name} // update field as user types. copy old
                onChange={(e) => setPerson({ ...person, name: e.target.value })} // object, override specific field with new value
            />
            <input // update field as user types. copy old object,
                defaultValue={person.age}
                onChange={(e) => setPerson({
                    ...person, // override specific field with new value
                    age: parseInt(e.target.value)
                })}
            />
            <hr />
        </div>
    );
}
