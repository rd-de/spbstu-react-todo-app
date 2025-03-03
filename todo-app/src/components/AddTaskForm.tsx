import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

const AddTaskForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', gap:'10px'}}>
            <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Task" />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;