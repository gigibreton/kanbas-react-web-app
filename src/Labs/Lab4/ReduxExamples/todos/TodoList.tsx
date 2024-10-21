import React, { useState } from "react"; // import useState
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function TodoList() {
    const [todos, setTodos] = useState([ // create todos array state variable
        { id: "1", title: "Learn React" }, // initiailize with 2 todo objects
        { id: "2", title: "Learn Node" }]);
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" }); // create todo state variable object
    const addTodo = (todo: any) => { // event handler to add new todo
        const newTodos = [...todos, {
            ...todo, // spread existing todos, append new todo,
            id: new Date().getTime().toString()
        }]; // override id
        setTodos(newTodos); // update todos
        setTodo({ id: "-1", title: "" }); // clear the todo
    };
    const deleteTodo = (id: string) => { // event handler to remove todo by their ID
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const updateTodo = (todo: any) => { // event handler to
        const newTodos = todos.map((item) => // update todo by
            (item.id === todo.id ? todo : item)); // replacing todo
        setTodos(newTodos); // by their ID
        setTodo({ id: "-1", title: "" });
    };
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm
                    todo={todo} // TodoForm breaks out form to add or update todo
                    setTodo={setTodo} // pass state variabls and
                    addTodo={addTodo} // event handlers
                    updateTodo={updateTodo} /> { /* so component */}
                {todos.map((todo) => ( // can communicate with ToDoList's data and functions
                    <TodoItem
                        todo={todo} // TodoItem breaks out todo item
                        deleteTodo={deleteTodo} // pass state variables and
                        setTodo={setTodo} /> // event handlers to
                ))} { /* communicate with TodoList's data and functions */}

            </ul>
            <hr />
        </div>
    );
}
