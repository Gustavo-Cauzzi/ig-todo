import { useState } from "react";
import styles from "./App.module.css";
import Chip from "./components/Chip";
import Header from "./components/Header";
import TodoItem, { Task } from "./components/TodoItem";
import { v4 } from "uuid";
import { PlusCircle } from "phosphor-react";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus architecto aliquid, fuga modi laudantium, animi magni explicabo sunt nulla in nisi vero laboriosam quam aliquam nostrum nihil commodi! Modi!";

const initialTasks = [...Array(4).keys()].map(() => ({
  id: v4(),
  content: lorem,
  done: false,
}));

function App() {
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);
  const doneTasksQtd = taskList.filter((task) => task.done).length;
  const [newTask, setNewTask] = useState("");

  const handleDoneClick = (id: string, done: boolean) => {
    setTaskList((state) =>
      state.map((task) => (task.id === id ? { ...task, done } : task))
    );
  };

  const handleDeletetask = (id: string) => {
    setTaskList((state) => state.filter((task) => task.id !== id));
  };

  const handleAddTodo = () => {
    setTaskList((state) => [
      { id: v4(), done: false, content: newTask },
      ...state,
    ]);
    setNewTask("");
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className={styles.summary}>
          <p className={styles.created}>
            Tarefas criadas <Chip>{taskList.length}</Chip>
          </p>
          <p className={styles.concluded}>
            Concluídas{" "}
            <Chip>
              {doneTasksQtd} de {taskList.length}
            </Chip>
          </p>
        </div>

        <div className={styles.taskList}>
          {taskList.map((task) => (
            <TodoItem
              task={task}
              key={task.id}
              onDeleteClick={handleDeletetask}
              onDoneClick={handleDoneClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
