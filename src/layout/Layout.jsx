import React, { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../components/NavBar/NavBar";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";

import { ThemeContext } from "../utils/ThemeProvider/ThemeProvider";

import css from "./Layout.module.scss";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? css.darkTheme : css.lightTheme}`}>
      <div className={`${theme === "dark" ? css.darkBg : css.lightBg}`}>
        <NavBar />
        <main className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          theme="colored"
          hideProgressBar="true"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
