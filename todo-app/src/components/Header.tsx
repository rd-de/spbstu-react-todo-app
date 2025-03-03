import { useState } from "react";

const Header = ({ onThemeToggle }: { onThemeToggle: () => void }) => {
    return (
        <header className="header">
            <h1 className="logo">Todo List</h1>
            <nav>
                <button>Login</button>
                <button>Register</button>
                <button onClick={onThemeToggle}>Theme</button>
            </nav>
        </header>
    );
};

export default Header;