import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeProvider/ThemeProvider";

import css from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={css.button}>
      <div className={css.switch}>
        <label className= {theme === "dark" ? css.moon : css.sun} for="Switch">
          <span className={css.switch__indicator}></span>
          <span className={css.switch__decoration}></span>
        </label>
      </div>
    </button>
  );
};

export default ThemeSwitcher;