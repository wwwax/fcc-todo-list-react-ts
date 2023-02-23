import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";

import { Todo } from "../../model";
import s from "./App.module.css";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <DragDropContext onDragEnd={() => {}}>
            <div className={s.app}>
                <span className={s.heading}>Taskify</span>

                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    );
};

export default App;
