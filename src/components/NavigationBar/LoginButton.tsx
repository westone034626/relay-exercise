import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface LoginButton {
  style?: CSSProperties;
}

function LoginButton({ style }: LoginButton) {
  const navigation = useNavigate();
  const goLoginPage = () => {
    navigation("/login");
  };
  return <Button title="로그인" onClick={goLoginPage} style={style} />;
}

export default LoginButton;
