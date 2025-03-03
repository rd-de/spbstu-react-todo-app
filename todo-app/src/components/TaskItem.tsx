import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from '../store/tasksSlice'

interface TaskItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TaskItem = ({ id, text, completed }: TaskItemProps) => {
    const dispatch = useDispatch();

    return (
        <li >
            <span className={completed ? 'completed' : ''}>{text}</span>
            <div className="task-buttons">
                <button className="complete-btn" onClick={() => dispatch(toggleTask(id))}>V</button>
                <button className="delete-btn" onClick={() => dispatch(deleteTask(id))}>X</button>
            </div>

        </li>
    );
};

export default TaskItem;