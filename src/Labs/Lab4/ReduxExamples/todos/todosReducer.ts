import { createSlice } from "@reduxjs/toolkit"; // import create slice
const initialState = { // declare initial state of reducer
    todos: [ // moved here from TodoList.tsx
        { id: "1", title: "Learn React" }, // todos has default todos
        { id: "2", title: "Learn Node" },
    ],
    todo: { title: "Learn Mongo" }, // todo has default todo
};
const todosSlice = createSlice({ // create slice
    name: "todos", // name slice
    initialState, // configure store's initial state
    reducers: { // declare reducer functions
        addTodo: (state, action) => { // addTodo reducer function, action
            const newTodos = [ // contains new todo. newTodos
                ...state.todos, // copy old todos, append new todo
                { ...action.payload, id: new Date().getTime().toString() }, // in action.payload, override
            ]; // id as timestamp
            state.todos = newTodos; // update todos
            state.todo = { title: "" }; // clear todo
        },
        deleteTodo: (state, action) => { // deleteTodo reducer function,
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload); // rebuilding newTodos by replacing
            state.todos = newTodos; // old todo with new todo in
        },
        updateTodo: (state, action) => { // updateTodo reducer function
            const newTodos = state.todos.map((item) => // rebuilding todos by replacing 
                item.id === action.payload.id ? action.payload : item // old todo with new todo in
            ); // action.payload
            state.todos = newTodos; // update todos
            state.todo = { title: "" }; // clear todo
        },
        setTodo: (state, action) => { // setTodo reducer function
            state.todo = action.payload; // to update todo state variable
        },
    },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions; // export reducer functions
export default todosSlice.reducer; // export reducer for store