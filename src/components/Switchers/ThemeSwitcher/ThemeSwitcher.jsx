import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeProvider/ThemeProvider";
import Icon from "../../../shared/Icon/Icon";

import css from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
    >
       {theme === 'light' ? (
        <Icon id="sun" h="28" w="28" /> 
      ) : (
        <Icon id="moon" h="28" w="28" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
