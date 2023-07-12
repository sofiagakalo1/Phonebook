import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeProvider/ThemeProvider";

import css from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={css.button}>
        <label className={theme === "dark" ? css.moon : css.sun}>
          <span className={css.switch__indicator}></span>
          <span className={css.switch__decoration}></span>
        </label>
    </button>
  );
};

export default ThemeSwitcher;
