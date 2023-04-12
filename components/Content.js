import React from "react";

import styles from "./Content.module.css";

import { useContext } from "react";

function Content() {
  const title = "unsetted";
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <h3>Lorus Ompus Bligius</h3>
        <h6>{title} is pltform that helps you thing thing thing thing</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.right}>
        <video src="/videos/video-1.mp4" controls loop />
      </div>
    </div>
  );
}

export default Content;
