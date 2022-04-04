import styles from "../styles/footer.module.css";
import moment from "moment";

const Footer = () => {
  return (
    <footer className={styles.page_footer}>
      {moment().format("hh:mm DD-MM-YYYY")}
    </footer>
  );
};

export default Footer;
