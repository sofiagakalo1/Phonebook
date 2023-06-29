import React from "react";
import { NavLink } from "react-router-dom";
// import AuthMenu from './AuthMenu/AuthMenu';
// import UserMenu from './UserMenu/UserMenu';

import css from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={css.header}>
      <div className={css.nav_links}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
