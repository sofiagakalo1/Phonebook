import React,{useContext} from "react";

import { ThemeContext } from "../../utils/ThemeProvider/ThemeProvider";

import css from "./Footer.module.scss";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
  return (
        <footer className={`${css.container} ${theme === "dark" ? css.darkTheme : css.lightTheme}`}>
        Developed by <a href="https://github.com/sofiagakalo1">sofiagakalo1</a>
        </footer>
  );
};

export default Footer;
