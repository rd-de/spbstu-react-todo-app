import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/authSlice';
import Modal from './Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useDispatch();
  const password = watch('password');

  const onSubmit = (data: any) => {
    dispatch(registerUser(data));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="modal-input"
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input className="modal-input"
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required', minLength: 6 })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input className="modal-input"
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
