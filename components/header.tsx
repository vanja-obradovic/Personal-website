import Link from "next/link";
import navbarStyle from "../styles/navbar.module.css";

const Header = () => {
  return (
    <header className={navbarStyle.navbar}>
      {/* <nav style={{ width: "60vw" }}>
        <ul className={navbarStyle.navbar_elems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Link href="/#card_section">
        <div className={navbarStyle.navbar_elems}>
          <img
            src="https://img.icons8.com/ios-filled/100/000000/long-arrow-down.png"
            alt=""
            className="rightArrow"
          />
          Back to home page
        </div>
      </Link>
    </header>
  );
};

export default Header;
