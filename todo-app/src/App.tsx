import { useState } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        onThemeToggle={toggleTheme}
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
      />
      <main className="main-content">
        <section className="task-form">
          <AddTaskForm />
        </section>
        <section className="task-list">
          <TaskList />
        </section>
      </main>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div>
  );
};

export default App;
