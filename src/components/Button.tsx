import styles from "./Button.module.css";
import { CSSProperties } from "react";

interface Button {
  style?: CSSProperties;
  onClick?: () => void;
  title: string;
}

function Button({ title, onClick, style }: Button) {
  return (
    <button className={styles.container} style={style} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
