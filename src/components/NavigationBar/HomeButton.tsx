import { CSSProperties } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";

interface HomeButton {
  style?: CSSProperties;
}

function HomeButton({ style }: HomeButton) {
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };
  return <Button title="오늘의 체크" onClick={goHome} style={style} />;
}

export default HomeButton;
