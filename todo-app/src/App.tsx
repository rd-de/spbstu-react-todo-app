import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from './components/TaskList';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {setDarkMode((prev) => !prev);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <Header onThemeToggle={toggleTheme} />
      <hr />
      <main className="main-content">
        <section className="task-form">
          <h2>Task Create</h2>
          <hr />
          <AddTaskForm />
        </section>
        <section className="task-list">
          <h2>Task List</h2>
          <hr />
          <TaskList />
        </section>
      </main>
    </div>
  )
};


export default App;