import React, { CSSProperties } from "react";
import Button from "../Button";

interface LogoutButtonProps {
  style?: CSSProperties;
  onClick: () => void;
}

function LogoutButton({ style, onClick }: LogoutButtonProps) {
  return <Button title="로그아웃" onClick={onClick} style={style} />;
}

export default LogoutButton;
