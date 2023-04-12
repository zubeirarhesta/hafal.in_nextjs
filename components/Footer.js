import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import styles from "./Footer.module.css";
import { useContext } from "react";
import { TitleContext } from "./Contexts";

function Footer() {
  const title = useContext(TitleContext);
  return (
    <div className={styles.footer_container}>
      <section className={styles.footer_subscription}>
        <p className={styles.footer_subscription_heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.footer_subscription_text}>
          You can unsubscribe at anytime.
        </p>
        <div className={styles.input_areas}>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.footer_input}
            />
            <Button buttonStyle="btn_outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className={styles.footer_links}>
        <div className={styles.footer_link_wrapper}>
          <div className={styles.footer_link_items}>
            <h2>About Us</h2>
            <Link href="/sign-up">How it works</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Investors</Link>
            <Link href="/">Terms of Service</Link>
          </div>
          <div className={styles.footer_link_items}>
            <h2>Contact Us</h2>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
            <Link href="/">Destinations</Link>
            <Link href="/">Sponsorships</Link>
          </div>
        </div>
        <div className={styles.footer_link_wrapper}>
          <div className={styles.footer_link_items}>
            <h2>Videos</h2>
            <Link href="/">Submit Video</Link>
            <Link href="/">Ambassadors</Link>
            <Link href="/">Agency</Link>
            <Link href="/">Influencer</Link>
          </div>
          <div className={styles.footer_link_items}>
            <h2>Social Media</h2>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">Youtube</Link>
            <Link href="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <div className={styles.footer_logo}>
            <Link href="/" className={styles.social_logo}>
              <div className={styles.title}>{title}</div>
              <i className="fas fa-quran" color="white" />
            </Link>
          </div>
          <small className={styles.website_rights}>{title} © 2020</small>
          <div className={styles.social_icons}>
            <Link
              className={styles.social_icon_link}
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className={styles.social_icon_link}
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className={styles.social_icon_link}
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className={styles.social_icon_link}
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className={styles.social_icon_link}
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
