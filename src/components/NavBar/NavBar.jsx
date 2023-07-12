import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { isUserLogin } from "../../redux/selectors";

import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./AuthMenu/AuthMenu";
import ThemeSwitcher from "../Switchers/ThemeSwitcher/ThemeSwitcher";

import css from "./NavBar.module.scss";

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <header className={css.header}>
      <div className={css.nav_links}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {isLogin && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </div>
      <ThemeSwitcher />
      {!isLogin && <AuthMenu />}
      {isLogin && <UserMenu />}
    </header>
  );
};

export default NavBar;
