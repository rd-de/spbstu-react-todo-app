import { useState } from "react";
import Modal from './Modal';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('login:', email, password);
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Email:</label>
                    <input className="modal-input" type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required/>
                </div>
                <div style={{ marginBottom: '10px'}}>
                    <label>Passworm:</label>
                    <input className="modal-input" type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                </div>
                <button type="submit">Login</button>
            </form>
        </Modal>    
    );
};

export default LoginModal;