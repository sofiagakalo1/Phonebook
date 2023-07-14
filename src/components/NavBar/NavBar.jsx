import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { isUserLogin } from "../../redux/selectors";

import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./AuthMenu/AuthMenu";
import ThemeSwitcher from "../Switchers/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../../utils/ThemeProvider/ThemeProvider";

import css from "./NavBar.module.scss";

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  const { theme } = useContext(ThemeContext);

  return (
    <header className={css.header}>
      <div
        className={`${css.nav_links} ${
          theme === "dark" ? css.nav_links_darkTheme : css.nav_links_lightTheme
        }`}
      >
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
