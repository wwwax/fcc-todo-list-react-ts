import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../model";
import s from "./TodoList.module.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className={s.container}>
            <div className={s.todos}>
                <span className={s.todos__heading}>Active Tasks</span>

                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>

            <div className={`${s.todos} ${s.remove}`}>
                <span className={s.todos__heading}>Completed Tasks</span>

                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
