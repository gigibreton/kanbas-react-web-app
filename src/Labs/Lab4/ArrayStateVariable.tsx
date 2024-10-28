import React, { useState } from "react"; // import useState
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]); // declare array state
    const addElement = () => { // event handler appends
        setArray([...array, Math.floor(Math.random() * 100)]); // random number at end of array
    };
    const deleteElement = (index: number) => { // event handler removes
        setArray(array.filter((item, i) => i !== index)); // element by index
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add Element</button> { /* button calls addElement */}
            <ul> { /* to append to array */}
                {array.map((item, index) => ( // iterate over array items
                    <li key={index}>
                        {item} { /* render item's value */}
                        <button onClick={() => deleteElement(index)} // button to delete element
                            id="wd-delete-element-click"> { /* by its index */}
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}