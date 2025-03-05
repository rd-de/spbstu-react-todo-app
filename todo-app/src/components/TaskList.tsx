import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleTask, deleteTask, clearTasks } from '../store/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <span onClick={() => dispatch(toggleTask(task.id))}>
                  {task.title}
                </span>
                <button onClick={() => dispatch(deleteTask(task.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearTasks())}>Clear All Tasks</button>
        </>
      )}
    </div>
  );
};

export default TaskList;
