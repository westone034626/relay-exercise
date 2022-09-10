import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "./AuthProvider";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  return auth?.user ? <div>{children}</div> : <Navigate replace to="/login" />;
}

export default RequireAuth;
