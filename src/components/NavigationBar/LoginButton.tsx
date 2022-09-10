import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface LoginButtonProps {
  style?: CSSProperties;
}

function LoginButton({ style }: LoginButtonProps) {
  const navigation = useNavigate();
  const goLoginScreen = () => {
    navigation("/login");
  };
  return <Button title="로그인" onClick={goLoginScreen} style={style} />;
}

export default LoginButton;
