import React from "react";
import styles from "./Cards.module.css";
import { Button } from "./Button";

function Cards({ children, title }) {
  return (
    <div className={styles.cards}>
      <div className={styles.topper}>
        <h1>{title}</h1>
        <ul className={styles.right}>
          <li>
            <Button
              to="/courses"
              buttonStyle="btn--outline"
              buttonSize="btn-large"
            >
              Kelas
            </Button>
          </li>
          <li>
            <Button
              id="daftar"
              buttonStyle="btn--primary"
              buttonSize="btn-large"
            >
              Daftar
            </Button>
          </li>
        </ul>
      </div>

      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>{children}</div>
      </div>
    </div>
  );
}

export default Cards;
