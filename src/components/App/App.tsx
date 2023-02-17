import { useState } from "react";

import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";

import { Todo } from "../../model";
import s from "./App.module.css";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <div className={s.app}>
            <span className={s.heading}>Taskify</span>

            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;

export const stateExample = {
    todos: [
        {
            id: 1,
            todo: "red",
            isDone: false,
        },
        {
            id: 2,
            todo: "green",
            isDone: false,
        },
    ],
};
