import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const STYLES = ["btn_primary", "btn_outline"];

const SIZES = ["btn_medium", "btn_large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to = "/sign-up",
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href={to} className="btn-mobile">
      <button
        className={`${styles["btn"]} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
        //className="btn btn_primary btn_medium"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
