import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/authSlice";
import Modal from './Modal';
import './Modal.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      username: data.username, // Меняем email на username
      password: data.password,
    };
  
    try {
      // Отправляем запрос на регистрацию
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('User registered:', result);
        // Дополнительная логика, например, сохранить в localStorage или в Redux
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Register</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="modal-input" {...register("username", { required: "Введите username" })} placeholder="Username" />
      <input className="modal-input" {...register("password", { required: "Введите пароль" })} type="password" placeholder="Пароль" />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Зарегистрироваться</button>
    </form>
    </Modal>
  );
};

export default RegisterModal;
