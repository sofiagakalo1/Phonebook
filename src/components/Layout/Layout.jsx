import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import css from "./Layout.module.scss";

import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
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
