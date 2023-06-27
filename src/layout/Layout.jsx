import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../components/NavBar/NavBar";
import Loader from "../components/Loader/Loader";

import css from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          theme="colored"
          hideProgressBar="true"
        />
      </div>
    </>
  );
};

export default Layout;
