import styles from "./HomeButton.module.css";
import { useNavigate } from "react-router";

function HomeButton() {
  const navigation = useNavigate();
  const goHome = () => {
    navigation("/");
  };
  return (
    <button className={styles.container} onClick={goHome}>
      오늘의 체크
    </button>
  );
}

export default HomeButton;
