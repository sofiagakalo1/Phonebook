import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeProvider/ThemeProvider";

import css from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
};

export default ThemeSwitcher;
