import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)

    return (
        <ul>
            {tasks.length > 0 ? (tasks.map((task) => <TaskItem key={task.id} {...task}/>)) : (<p>No Task</p>)}
        </ul>
    )
}

export default TaskList;