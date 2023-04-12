import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Cards.module.css";

function CardItem(props) {
  return (
    <>
      <li className={styles.cards__item}>
        <Link className={styles.cards__item__link} href={props.path}>
          <figure
            className={styles.cards__item__pic__warp}
            data-category={props.label}
          >
            <Image
              className={styles.cards__item__img}
              alt="Course"
              src={props.src}
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5 className={styles.cards__item__text}>{props.text}</h5>
          </div>
          <div className={styles.cards__item__data}>
            <div className={styles.cards__item__data__profile}>
              <Image
                className={styles.cards__item__data__img}
                alt="Ustadz Pic"
                src={props.src2}
              />
              <p>{props.teacher}</p>
            </div>
            <p>{props.price} / hour</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
