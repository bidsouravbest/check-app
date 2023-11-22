import React from "react";
import { useAuth } from "../utils/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />
  }
  return children;
};

export default RequireAuth;
