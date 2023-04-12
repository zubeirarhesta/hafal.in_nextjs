import React, { useState, useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import { Button } from "./Button";
import Link from "next/link";

import { TitleContext } from "./Contexts";

export default function Navbar() {
  const title = useContext(TitleContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    window.addEventListener("resize", closeMobileMenu);
  }, []);

  /* window.addEventListener("resize", showButton); */

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link
            href="/"
            className={styles.navbar_logo}
            onClick={closeMobileMenu}
          >
            <div className={styles.title}>{title}</div>

            <i className="fas fa-quran" color="red" /* {`var(--primary)`} */ />
          </Link>
          <div className={styles.menu_icon} onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              color="black"
            />
          </div>
          {/* className={`${styles["btn"]} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
              className="btn btn_primary btn_medium" */}
          <ul
            className={
              click
                ? `${styles["nav_menu"]} ${styles["active"]}`
                : styles.nav_menu
            }
          >
            <li className={styles.nav_item}>
              <Link
                href="/"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                href="/about"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                href="/courses"
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up"
                className={styles.nav_links_mobile}
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn_primary">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
