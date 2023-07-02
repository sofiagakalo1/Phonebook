import React, { useState } from "react";

import useForm from "../../../hooks/useForm.js";

import TextField from "../../../shared/TextField/TextFiled";

import Icon from "../../../shared/Icon/Icon";

import fields from "./fields";
import initialState from "./initialState";

import css from "./LoginForm.module.scss";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={css.block}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h1 className={css.h1}>Authorization</h1>
        <div className={css.fields}>
          <TextField
            value={email}
            IconFieldLeft={true}
            handleChange={handleChange}
            inputStyle={{ minWidth: "300px" }}
            {...fields.email}
          >
            <Icon id="email" f="var(--icon-color)" h="24" w="24" />
          </TextField>
          <div className={css.inputContainer}>
            <TextField
              type={passwordVisible ? "text" : "password"}
              value={password}
              handleChange={handleChange}
              IconFieldLeft={true}
              inputStyle={{ paddingRight: "50px", minWidth: "300px" }}
              {...fields.password}
            >
              <Icon id="key" sw="15" h="24" w="24" />
            </TextField>
            <button
              type="button"
              className={css.passwordToggle}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <Icon id="eye-open" h="24" w="24" />
              ) : (
                <Icon id="eye-closed" h="24" w="24" />
              )}
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
