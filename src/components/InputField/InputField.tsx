import { useRef } from "react";
import s from "./InputField.module.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className={s.input}
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                className={s.input__box}
                type="text"
                placeholder="enter a task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                ref={inputRef}
            />

            <button className={s.input__submit} type="submit">
                go
            </button>
        </form>
    );
};

export default InputField;
