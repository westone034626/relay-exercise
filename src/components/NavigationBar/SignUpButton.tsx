import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface SignUpButton {
  style?: CSSProperties;
}

function SignUpButton({ style }: SignUpButton) {
  const navigation = useNavigate();
  const goSignUpPage = () => {
    navigation("/sign-up");
  };
  return <Button title="회원가입" onClick={goSignUpPage} style={style} />;
}

export default SignUpButton;
