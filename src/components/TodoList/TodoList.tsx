import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../model";
import s from "./TodoList.module.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
}) => {
    return (
        <div className={s.container}>
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`${s.todos} ${
                            snapshot.isDraggingOver ? s.dragactive : null
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className={s.todos__heading}>Active Tasks</span>

                        {todos.map((todo, index) => (
                            <TodoItem
                                index={index}
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`${s.todos} ${s.remove} ${
                            snapshot.isDraggingOver ? s.dragcomplete : null
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className={s.todos__heading}>
                            Completed Tasks
                        </span>

                        {completedTodos.map((todo, index) => (
                            <TodoItem
                                index={index}
                                todo={todo}
                                key={todo.id}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;
