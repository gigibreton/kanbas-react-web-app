export default function TodoItem({ todo, deleteTodo, setTodo }: { // breaks out todo item
    todo: { id: string; title: string }; // todo to render
    deleteTodo: (id: string) => void; // event handler to remove todo
    setTodo: (todo: { id: string; title: string }) => void; // event handler to select todo
}) {
    return (
        <li key={todo.id} className="list-group-item">
            <button onClick={() => deleteTodo(todo.id)} // invoke delete todo with ID
                id="wd-delete-todo-click"> Delete </button>
            <button onClick={() => setTodo(todo)} // invoke select todo
                id="wd-set-todo-click"> Edit </button>
            {todo.title}    </li>); // render todo's title
} 