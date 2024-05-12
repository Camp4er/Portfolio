import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Poorva Saxena (Camp4er)</h1>
        <p className={styles.description}>
        A passionate front-end developer dedicated to leveraging technology for positive change worldwide. Committed to diving deep into tech advancements, I strive to create meaningful solutions that improve lives and foster societal progress, while continually exploring new possibilities and pushing the boundaries of innovation.
        </p>
        {/* <a href="mailto:saxenapoorva2004@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
