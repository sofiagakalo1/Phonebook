import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUserEmail } from "../../../redux/selectors";
import { fetchLogout } from "../../../redux/auth/auth-operations";

import Button from "../../../shared/Button";
import Icon from "../../../shared/Icon/Icon";

import { ThemeContext } from "../../../utils/ThemeProvider/ThemeProvider";

import css from "./UserMenu.module.scss";

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const onLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div className={css.div}>
      <div className={css.userContainer}>
        {/* <Button navLink={true} to={"/user"} onlyIcon={true}>
          <Icon id="user" h="28" w="28"/>
        </Button> */}
        <p
          className={`${theme === "dark" ? css.p_darkTheme : css.p_lightTheme}`}
        >
          {userEmail}
        </p>
      </div>
      <Button
        onClick={onLogout}
        text="Logout"
        buttonStyle={{
          padding: "5px 20px",
          fontSize: "20px",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          // width:"152px",
        }}
      >
        <Icon id="logout" h="28" w="28" />
      </Button>
    </div>
  );
};
export default UserMenu;
