import { useState } from "react";
import { toast } from "react-toastify";
import TextField from "../../../shared/TextField/TextFiled";
import fields from "./fields";

import initialState from "./initialState";
import css from "./RegisterForm.module.scss";

const RegisterForm = ({ onSubmit }) => {
  const [user, setUser] = useState(initialState);

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
          ></TextField>
          <TextField
            value={user.email}
            onChange={handleChange}
            {...fields.email}
            IconFieldLeft={true}
            inputStyle={{ minWidth: "300px" }}
          ></TextField>
          <div className={css.inputContainer}>
            <TextField
              type="password"
              value={user.password}
              handleChange={handleChange}
              IconFieldLeft={true}
              inputStyle={{ minWidth: "300px" }}
              {...fields.password}
            ></TextField>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterForm;
