import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { fetchCurrent } from "../src/redux/auth/auth-operations";
import { selectIsRefreshing } from "../src/redux/selectors";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

import css from "./App.css";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage"));
const ContactsPage = lazy(() => import("../src/pages/ContactsPage"));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div style={css}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace="*" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
