import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../../model";

import styles from "./TodoItem.module.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, todos, setTodos }: Props) => {
    const completeTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <form className={styles.item}>
            <span
                className={styles.todo}
                style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                }}
            >
                {todo.todo}
            </span>

            <div>
                <span className={styles.icon}>
                    <AiFillEdit />
                </span>
                <span
                    className={styles.icon}
                    onClick={() => deleteTodo(todo.id)}
                >
                    <AiFillDelete />
                </span>
                <span
                    className={styles.icon}
                    onClick={() => completeTodo(todo.id)}
                >
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default TodoItem;

/*

- меняем изДан на противоположный

*/
