import LoginForm, { LoginFormData } from "../components/LoginScreen/LoginForm";
import SectionTitle from "../components/SectionTitle";
import WhiteSpace from "../components/WhiteSpace";
import styles from "./LoginScreen.module.css";

import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../components/AuthProvider";
import { useState } from "react";

function LoginScreen() {
  const auth = useAuth();
  const [isLoginProgressing, setIsLoginProgressing] = useState(false);
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };
  const onLoginFormFinish = (values: LoginFormData) => {
    setIsLoginProgressing(true);
    auth
      ?.login(values)
      .then((r) => {
        console.log("r ", r);
        goHome();
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
