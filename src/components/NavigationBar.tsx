import { CSSProperties } from "react";
import styles from "./NavigationBar.module.css";
import HomeButton from "./NavigationBar/HomeButton";

interface NavigationBarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: CSSProperties;
}

function NavigationBar({ left, right, style }: NavigationBarProps) {
  return (
    <nav className={styles.container} style={style}>
      {<div className={styles.left}>{left ? left : <HomeButton />}</div>}
      {right && <div className={styles.right}>{right}</div>}
    </nav>
  );
}

export default NavigationBar;
