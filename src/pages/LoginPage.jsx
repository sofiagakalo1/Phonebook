import React from 'react'
import { useDispatch} from 'react-redux';

import { fetchLogin } from '../redux/auth/auth-operations';

import LoginForm from '../components/Forms/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = userData => {
    dispatch(fetchLogin(userData));
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
