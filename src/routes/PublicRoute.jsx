import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectToken, isUserLogin } from "../redux/selectors";

const PublicRoute = () => {
  const token = useSelector(selectToken);
  const isLogin = useSelector(isUserLogin);

  if (!isLogin && token) {
    return <p>Loading...</p>;
  }
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
