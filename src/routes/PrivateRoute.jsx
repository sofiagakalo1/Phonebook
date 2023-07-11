import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectToken, isUserLogin } from "../redux/selectors";

const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const isLogin = useSelector(isUserLogin);

  if (!isLogin && token) {
    return <p>Loading...</p>;
  }
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
export default PrivateRoute;
