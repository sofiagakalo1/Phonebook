import React, { useEffect, useContext, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { fetchCurrent } from "../src/redux/auth/auth-operations";
import { selectIsRefreshing } from "../src/redux/selectors";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import Layout from "./layout/Layout";
import Loader from "./components/Loader/Loader";

import { ThemeContext } from "./utils/ThemeProvider/ThemeProvider";

import css from "./App.module.scss";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage"));
const ContactsPage = lazy(() => import("../src/pages/ContactsPage"));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className={`${theme === "dark" ? css.darkTheme : css.lightTheme}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace="*" />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
