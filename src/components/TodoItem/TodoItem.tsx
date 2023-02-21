import { useEffect, useRef, useState } from "react";
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
    const [isEdit, setIsEdit] = useState<boolean>(todo.isDone);
    const [editedText, setEditedText] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

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

    const handleEditClick = () => {
        if (!todo.isDone) {
            setIsEdit((prevState) => !prevState);
        }
    };

    const editTodo = (e: React.FormEvent) => {
        e.preventDefault();

        if (editedText) {
            setTodos(
                todos.map((item) =>
                    item.id === todo.id
                        ? {
                              ...item,
                              todo: editedText,
                          }
                        : item
                )
            );

            setIsEdit((prevState) => !prevState);
        }
    };

    const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(e.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit]);

    return (
        <form className={styles.item} onSubmit={editTodo}>
            {isEdit ? (
                <input
                    className={styles.todo}
                    type="text"
                    value={editedText}
                    onChange={handleEditText}
                    style={{
                        backgroundColor: "transparent",
                        fontFamily: "inherit",
                    }}
                    ref={inputRef}
                />
            ) : (
                <span
                    className={styles.todo}
                    style={{
                        textDecoration: todo.isDone ? "line-through" : "none",
                    }}
                >
                    {todo.todo}
                </span>
            )}

            <div>
                <span className={styles.icon} onClick={handleEditClick}>
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
