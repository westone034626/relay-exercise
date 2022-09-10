import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface SignUpButtonProps {
  style?: CSSProperties;
}

function SignUpButton({ style }: SignUpButtonProps) {
  const navigation = useNavigate();
  const goSignUpScreen = () => {
    navigation("/sign-up");
  };
  return <Button title="회원가입" onClick={goSignUpScreen} style={style} />;
}

export default SignUpButton;
