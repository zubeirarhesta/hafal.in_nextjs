import React from "react";
import { useContext } from "react";
import { TitleContext } from "./Contexts";

import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import styles from "./Detail.module.css";
import detailPic from "../public/images/IMG_20200804_132100-02.jpeg";

function Detail() {
  const title = useContext(TitleContext);
  return (
    <div className={styles.detail}>
      <div className={styles.one}>
        <h3>
          New to {""}
          <Link className={styles.b} href="/">
            {title}
          </Link>{" "}
          ?
        </h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button buttonStyle="btn_primary" buttonSize="btn_large">
          Become a member today
        </Button>
        {/* <Link className={styles.a} href="/sign-up"></Link> */}
      </div>
      <div className={styles.two}>
        <Link className={styles.item__link} href="/courses">
          <figure className={styles.item__pic_wrap} data-category="">
            <Image className={styles.item__img} alt="lorem" src={detailPic} />
          </figure>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
