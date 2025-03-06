import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../store/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
          <button onClick={() => dispatch(toggleTask(task.id))}>Выполнить</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
