import React, { useContext } from "react";

import { ThemeContext } from "../../utils/ThemeProvider/ThemeProvider";

import css from "./Home.module.scss";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={css.container}>
      <h1
        className={`${css.h1} ${
          theme === "dark" ? css.h1_darkTheme : css.h1_lightTheme
        }`}
      >
        Welcome to phonebook!
      </h1>
      <div className={css.gif}>
        <img src={require("../../assets/gifs/home_gif.gif")} alt="GIF" />
      </div>
    </section>
  );
};

export default Home;
