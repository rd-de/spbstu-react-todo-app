interface HeaderProps {
    onThemeToggle: () => void;
    onLogin: () => void;
    onRegister: () => void;
}

const Header = ({ onThemeToggle, onLogin, onRegister }: HeaderProps) => {
    return (
        <header className="header">
            <h1 className="logo">Todo List</h1>
            <nav>
                <button onClick={onLogin}>Login</button>
                <button onClick={onRegister}>Register</button>
                <button onClick={onThemeToggle}>Theme</button>
            </nav>
        </header>
    );
};

export default Header;