import css from "./AuthMenu.module.scss";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className={css.div}>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default UserMenu;
