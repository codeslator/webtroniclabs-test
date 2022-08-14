import { FC } from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: FC = () => {
  return (
    <div className="mx-auto w-full">
      <LoginForm />
    </div>
  )
}

export default LoginPage