import React from "react";

import Button from "../../../shared/Button/Button.jsx";
import Icon from "../../../shared/Icon/Icon";

import css from "./AuthMenu.module.scss";

const UserMenu = () => {
  return (
    <div className={css.container}>
      <Button
        navLink={true}
        text="Register"
        to={"/register"}
        hasIcon={true}
        buttonStyle={{ width: "152px" }}
      >
        <Icon id="register" h="28" w="28" />
      </Button>

      <Button
        navLink={true}
        text="Login"
        to={"/login"}
        hasIcon={true}
        buttonStyle={{ width: "152px" }}
      >
        <Icon id="login" h="28" w="28" />
      </Button>
    </div>
  );
};

export default UserMenu;
