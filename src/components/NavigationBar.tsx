import { CSSProperties } from "react";
import styles from "./NavigationBar.module.css";

interface NavigationBar {
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: CSSProperties;
}

function NavigationBar({ left, right, style }: NavigationBar) {
  return (
    <nav className={styles.container} style={style}>
      {left && <div className={styles.left}>{left}</div>}
      {right && <div className={styles.right}>{right}</div>}
    </nav>
  );
}

export default NavigationBar;
