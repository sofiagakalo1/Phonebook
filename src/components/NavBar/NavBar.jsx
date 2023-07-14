import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { isUserLogin } from "../../redux/selectors";

import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./AuthMenu/AuthMenu";
import Icon from "../../shared/Icon/Icon";

import ThemeSwitcher from "../Switchers/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../../utils/ThemeProvider/ThemeProvider";

import css from "./NavBar.module.scss";

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  const { theme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={css.header}>
      {isMobile ? (
        <>
          <div
            className={`${css.nav_links} ${
              theme === "dark"
                ? css.nav_links_darkTheme
                : css.nav_links_lightTheme
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
          <button className={css.burger_menu_icon} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <Icon id="cross" h="28" w="28" sw="3" />
            ) : (
              <Icon id="burger" h="28" w="28" sw="3" />
            )}
          </button>
          <div
            className={`${css.mobile_menu} ${
              theme === "dark"
                ? css.mobile_menu_darkTheme
                : css.mobile_menu_lightTheme
            } ${isMobileMenuOpen ? css.open : ""}`}
          >
            <div className={css.open_menu_items}>
              <ThemeSwitcher />
              {isLogin ? <UserMenu /> : <AuthMenu />}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${css.nav_links} ${
              theme === "dark"
                ? css.nav_links_darkTheme
                : css.nav_links_lightTheme
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
          {isLogin ? <UserMenu /> : <AuthMenu />}
        </>
      )}
    </header>
  );
};

export default NavBar;
