/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { FC } from "react";
import navbarStyle from "../styles/navbar.module.css";

const Header: FC = () => {
  return (
    <header className={navbarStyle.navbar}>
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
