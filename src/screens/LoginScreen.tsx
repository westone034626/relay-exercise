import React from "react";
import LoginForm from "../components/LoginScreen/LoginForm";
import SectionTitle from "../components/SectionTitle";
import WhiteSpace from "../components/WhiteSpace";

function LoginScreen() {
  return (
    <section>
      <WhiteSpace size={"md"} />
      <SectionTitle title="로그인" style={{ marginLeft: 16 }} />
      <WhiteSpace size={"xl"} />
      <LoginForm />
    </section>
  );
}

export default LoginScreen;
