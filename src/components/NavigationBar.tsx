import { CSSProperties } from "react";
import styles from "./NavigationBar.module.css";
import HomeButton from "./NavigationBar/HomeButton";

interface NavigationBar {
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: CSSProperties;
}

function NavigationBar({ left, right, style }: NavigationBar) {
  return (
    <nav className={styles.container} style={style}>
      {<div className={styles.left}>{left ? left : <HomeButton />}</div>}
      {right && <div className={styles.right}>{right}</div>}
    </nav>
  );
}

export default NavigationBar;
