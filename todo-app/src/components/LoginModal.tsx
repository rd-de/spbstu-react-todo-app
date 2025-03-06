import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";
import Modal from './Modal';
import './Modal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      onClose();
    } catch (error) {
      setError("password", { type: "manual", message: "Неверный логин или пароль" });
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
           <input className="modal-input" {...register("username", { required: "Введите логин" })} placeholder="Логин" />
           <input className="modal-input" {...register("password", { required: "Введите пароль" })} type="password" placeholder="Пароль" />
           {errors.password && <p>{errors.password.message}</p>}
           <button type="submit">Войти</button>
         </form>
    </Modal>
  );
};

export default LoginModal;