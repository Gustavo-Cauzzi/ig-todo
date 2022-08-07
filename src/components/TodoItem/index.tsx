import React from "react";
import { Trash } from "phosphor-react";

import styles from "./TodoItem.module.css";
import Checkbox from "../Checkbox";

export interface Task {
  done: boolean;
  content: string;
  id: string;
}

type TodoItemProps = {
  task: Task;
  onDeleteClick?: (id: string) => any;
  onDoneClick?: (id: string, done: boolean) => any;
};

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDeleteClick,
  onDoneClick,
}) => {
  return (
    <div className={styles.todoItemContainer}>
      <div>
        <Checkbox
          selected={task.done}
          onClick={() => onDoneClick && onDoneClick(task.id, !task.done)}
        />
      </div>
      <p className={task.done ? styles.done : ""}>{task.content}</p>
      <div>
        <Trash onClick={() => onDeleteClick && onDeleteClick(task.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
