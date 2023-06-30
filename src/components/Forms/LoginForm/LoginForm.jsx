import React from "react";
import initialState from "./initialState";
import useForm from "../../../hooks/useForm.js";
import TextField from "../../../shared/TextField/TextFiled";
import fields from "./fields";

import css from "./LoginForm.module.scss";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

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
          ></TextField>
          <div className={css.inputContainer}>
            <TextField
              type="password"
              value={password}
              handleChange={handleChange}
              IconFieldLeft={true}
              inputStyle={{ paddingRight: "50px", minWidth: "300px" }}
              {...fields.password}
            ></TextField>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
