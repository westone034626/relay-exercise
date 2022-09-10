import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import NavigationBar from "./NavigationBar";
import LoginButton from "./NavigationBar/LoginButton";
import LogoutButton from "./NavigationBar/LogoutButton";
import SignUpButton from "./NavigationBar/SignUpButton";

function Layout() {
  const auth = useAuth();
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };
  return (
    <>
      <NavigationBar
        style={{ padding: 24 }}
        right={
          <div style={{ display: "flex", gap: "0 24px" }}>
            {auth?.user ? (
              <LogoutButton
                onClick={() => {
                  auth?.logout().then(() => {
                    goHome();
                  });
                }}
              />
            ) : (
              <>
                <LoginButton />
                <SignUpButton />
              </>
            )}
          </div>
        }
      />
      <Outlet />
    </>
  );
}

export default Layout;
