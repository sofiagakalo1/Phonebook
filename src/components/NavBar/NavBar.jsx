import { useSelector } from "react-redux";
import { isUserLogin } from "../../redux/selectors";
import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./AuthMenu/AuthMenu";
import { NavLink } from "react-router-dom";
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
      {!isLogin && <AuthMenu />}
      {isLogin && <UserMenu />}
    </header>
  );
};

export default NavBar;
