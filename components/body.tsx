/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import bodyStyle from "../styles/bodyStyle.module.css";

const Body = () => {
  return (
    <div className={bodyStyle.maindiv}>
      <Link href="/blog">
        <div className="card_wrapper">
          <div className="card_wrapper_inner">
            <img src="\blog.jpg" alt="blog" width="100%" height="100%" />
            <div className="details">Blog</div>
          </div>
        </div>
      </Link>
      <Link href="/about">
        <div className="card_wrapper">
          <div className="card_wrapper_inner">
            <img src="\about.jpg" alt="about" width="100%" height="100%" />
            <div className="details">About</div>
          </div>
        </div>
      </Link>
      <Link href="/contact">
        <div className="card_wrapper">
          <div className="card_wrapper_inner">
            <img src="/contact.jpg" alt="contact" width="100%" height="100%" />
            <div className="details">Contact</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Body;
