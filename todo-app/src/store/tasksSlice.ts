import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const API_URL = 'https://dummyjson.com/todos';

interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'failed';
}

const loadTasksFromStorage = (): Task[] => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasksToStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState: TasksState = {
  tasks: loadTasksFromStorage(),
  status: 'idle',
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (userId: number) => {
    const response = await fetch(`${API_URL}/user/${userId}`);
    const data = await response.json();
    saveTasksToStorage(data);
    return data;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ userId: number; title: string }>) => {
      const newTask: Task = {
        id: Date.now(),
        userId: action.payload.userId,
        title: action.payload.title,
        completed: false,
      };
      state.tasks.push(newTask);
      saveTasksToStorage(state.tasks);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToStorage(state.tasks);
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.removeItem('tasks');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { addTask, toggleTask, deleteTask, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;