import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7); // declare and initialize
    console.log(count); // a variable. print changes
    return ( // of the variable to the console
        <div id="wd-counter-use-state">
            <h2>Counter: {count}</h2> { /* render variable */}
            <button
                onClick={() => setCount(count + 1)} // variable updates on console
                id="wd-counter-up-click"> { /* but fails to update the DOM as desired */}
                Up
            </button>
            <button
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">
                Down
            </button>
            <hr />
        </div>
    );
}
