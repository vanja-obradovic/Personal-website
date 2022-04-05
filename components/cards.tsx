/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "../styles/cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cards_wrapper} id="card_section">
      <Link href="/blog">
        <div className={styles.card_wrapper}>
          <div className={styles.card_wrapper_inner}>
            <img className={styles.card_image} src="\blog.jpg" alt="blog" />
            <div className={styles.details}>Blog</div>
          </div>
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.card_wrapper}>
          <div className={styles.card_wrapper_inner}>
            <img className={styles.card_image} src="\about.jpg" alt="about" />
            <div className={styles.details}>About</div>
          </div>
        </div>
      </Link>
      <Link href="/contact">
        <div className={styles.card_wrapper}>
          <div className={styles.card_wrapper_inner}>
            <img
              className={styles.card_image}
              src="/contact.jpg"
              alt="contact"
            />
            <div className={styles.details}>Contact</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
