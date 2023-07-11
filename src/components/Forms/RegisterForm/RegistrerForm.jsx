import React, { useState } from "react";
import { toast } from "react-toastify";

import TextField from "../../../shared/TextField/TextFiled";
import Icon from "../../../shared/Icon/Icon";
import Button from "../../../shared/Button";

import fields from "./fields";
import initialState from "./initialState";
import css from "./RegisterForm.module.scss";

const RegisterForm = ({ onSubmit }) => {
  const [user, setUser] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length < 7) {
      return toast.error("Password must be at least 7 characters long");
    }
    onSubmit(user);
    toast.success("Registration is successfull!");
  };

  return (
    <div className={css.block}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h1 className={css.h1}>Registration</h1>
        <div className={css.fields}>
          <TextField
            value={user.name}
            onChange={handleChange}
            {...fields.name}
            IconFieldLeft={true}
            inputStyle={{ minWidth: "300px" }}
          >
            <Icon id="name" h="24" w="24" />
          </TextField>
          <TextField
            value={user.email}
            onChange={handleChange}
            {...fields.email}
            IconFieldLeft={true}
            inputStyle={{ minWidth: "300px" }}
          >
            <Icon id="email" f="var(--icon-color)" h="24" w="24" />
          </TextField>
          <div className={css.inputContainer}>
            <TextField
              type={passwordVisible ? "text" : "password"}
              value={user.password}
              handleChange={handleChange}
              IconFieldLeft={true}
              inputStyle={{ minWidth: "300px" }}
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
        <Button
          type="submit"
          text="Register"
          buttonStyle={{
            padding: "5px 20px",
            fontSize: "16px",
          }}
        />
      </form>
    </div>
  );
};
export default RegisterForm;
