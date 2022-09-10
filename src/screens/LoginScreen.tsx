import LoginForm, { LoginFormData } from "../components/LoginScreen/LoginForm";
import SectionTitle from "../components/SectionTitle";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";

import { Location, Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useState } from "react";

interface CustomLocation extends Location {
  state: {
    from: Location;
  } | null;
}

function LoginScreen() {
  const location = useLocation() as CustomLocation;
  const safeRedirectPathname = location.state?.from.pathname || "/";
  const auth = useAuth();
  const [isLoginProgressing, setIsLoginProgressing] = useState(false);
  const navigation = useNavigate();
  const onLoginFormFinish = (values: LoginFormData) => {
    setIsLoginProgressing(true);
    auth
      ?.login(values)
      .then((r) => {
        console.log("r ", r);
        navigation(safeRedirectPathname, { replace: true });
      })
      .catch((e) => {
        console.log("e ", e);
      })
      .finally(() => {
        setIsLoginProgressing(false);
      });
  };
  const onLoginFormFinishFailed = () => {};

  return auth?.user ? (
    <Navigate replace to="/" />
  ) : (
    <section className={styles.container}>
      <WhiteSpace size={"md"} />
      <SectionTitle title="로그인" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <LoginForm
        isProgressing={isLoginProgressing}
        style={{ padding: "0 36px" }}
        onFinish={onLoginFormFinish}
        onFinishFailed={onLoginFormFinishFailed}
      />
    </section>
  );
}

export default LoginScreen;
