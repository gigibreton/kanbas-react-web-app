import { useSelector, useDispatch } from "react-redux"; // to read/write to reducer
import { useState } from "react"; // to maintain a and b parameters in UI
import { add } from "./addReducer";
export default function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23); // a and b state variables to edit
    const { sum } = useSelector((state: any) => state.addReducer); // parameters to add in the reducer
    const dispatch = useDispatch(); // read the sum state variable from the reducer
    return ( // dispatch to call add redux function
        <div className="w-25" id="wd-add-redux">
            <h1>Add Redux</h1> { /* render local state variables a and b, as well */}
            <h2>{a} + {b} = {sum}</h2> { /* as application state variable sum */}
            <input type="number" defaultValue={a}
                onChange={(e) => setA(parseInt(e.target.value))} // update the local component state variable a
                className="form-control" />
            <input type="number" defaultValue={b}
                onChange={(e) => setB(parseInt(e.target.value))} // update the local component state variable b
                className="form-control" />
            <button className="btn btn-primary" id="wd-add-redux-click" // on click, call add reducer function to
                onClick={() => dispatch(add({ a, b }))}> { /* compute the arithmetic addition of a and b, */}
                Add Redux </button> { /* and store it in application state */}
            <hr /> { /* variable sum */}
        </div>
    );
}
