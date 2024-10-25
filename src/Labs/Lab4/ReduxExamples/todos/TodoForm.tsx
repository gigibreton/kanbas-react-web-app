import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import useSelector, useDispatch
import { addTodo, updateTodo, setTodo } from "./todosReducer"; // to read/write to reducer
// reducer functions
export default function TodoForm( // remove dependency from
) { // parent component
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch(); // retrieve todo from reducer
    return ( // create dispatch instance to
        <li className="list-group-item"> {/* invoke reducer functions */}
            <button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </button> {/* wrap reducer functions */}
            <button onClick={() => dispatch(updateTodo(todo))} // with dispatch
                id="wd-update-todo-click"> Update </button>
            <input // wrap reducer functions
                value={todo.title} // with dispatch
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
        </li>
    );
}
