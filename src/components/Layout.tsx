import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LoginButton from "./NavigationBar/LoginButton";
import SignUpButton from "./NavigationBar/SignUpButton";

function Layout() {
  return (
    <>
      <NavigationBar
        style={{ padding: 24 }}
        right={
          <div style={{ display: "flex", gap: "0 24px" }}>
            <LoginButton />
            <SignUpButton />
          </div>
        }
      />
      <Outlet />
    </>
  );
}

export default Layout;
