import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthProvider";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const location = useLocation();
  return auth?.user ? (
    <div>{children}</div>
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
}

export default RequireAuth;
