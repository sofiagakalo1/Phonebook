import React from "react";
import { useDispatch } from "react-redux";

import { fetchSignup } from "../redux/auth/auth-operations";

import RegisterForm from "../components/Forms/RegisterForm/RegistrerForm";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = (userData) => {
    dispatch(fetchSignup(userData));
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
