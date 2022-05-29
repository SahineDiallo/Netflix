import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase/firebase";

const ProtectedRoutes = ({ redirectPath = "/login" }) => {
  const user = auth.currentUser;
  return user ? <Outlet /> : <Navigate to={redirectPath} />;
};

export const RedirectBack = () => {
  const user = auth.currentUser;
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
