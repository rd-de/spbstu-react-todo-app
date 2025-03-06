import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), text: action.payload, completed: false };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    loadUserTasks: (state) => {
      const savedTasks = localStorage.getItem("tasks");
      state.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    },
  },
});

export const { addTask, toggleTask, deleteTask, loadUserTasks } = taskSlice.actions;
export default taskSlice.reducer;
