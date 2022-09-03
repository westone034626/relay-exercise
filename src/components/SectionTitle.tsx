import React, { CSSProperties } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";
import styles from "./SectionTitle.module.css";
import WhiteSpace from "./WhiteSpace";

interface SectionTitle {
  title: string;
  subTitle?: string;
  style?: CSSProperties;
  sectionTo?: { to: To; options?: NavigateOptions | undefined };
}

function SectionTitle({ title, subTitle, style, sectionTo }: SectionTitle) {
  const navigation = useNavigate();
  return (
    <div
      className={styles.container}
      style={style}
      onClick={() => {
        sectionTo && navigation(sectionTo.to, sectionTo.options);
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      {subTitle && (
        <>
          <WhiteSpace />
          <p className={styles.subTitle}>{subTitle}</p>
        </>
      )}
    </div>
  );
}

export default SectionTitle;
