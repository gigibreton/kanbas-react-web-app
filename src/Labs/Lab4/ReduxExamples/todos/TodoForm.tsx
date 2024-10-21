export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: { // breaks out todo form
    todo: { id: string; title: string }; // todo to be added or edited
    setTodo: (todo: { id: string; title: string }) => void; // event handler to update todo's title
    addTodo: (todo: { id: string; title: string }) => void; // event handler to add new todo
    updateTodo: (todo: { id: string; title: string }) => void; // event handler to update todo
}) {
    return (
        <li className="list-group-item">
            <button onClick={() => addTodo(todo)} // invoke add new todo
                id="wd-add-todo-click"> Add </button> { /* invoke update todo */}
            <button onClick={() => updateTodo(todo)} // input field to update
                id="wd-update-todo-click"> Update </button> { /* todo's title */}
            <input defaultValue={todo.title} // update title on each key stroke
                onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </li>
    );
}
