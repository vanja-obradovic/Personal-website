import Image from "next/image";
import Link from "next/link";
import bodyStyle from "../styles/bodyStyle.module.css";

const Body = () => {
  return (
    <div>
      <div className={bodyStyle.maindiv}>
        <Link href="/blog">
          <div className="details_wrapper">
            <div className="details">Blog</div>
            <img src="\blog.jpg" alt="blog" width="100%" height="100%" />
          </div>
        </Link>
        <Link href="/about">
          <div className="details_wrapper">
            <div className="details">About</div>
            <img src="\about.jpg" alt="about" width="100%" height="100%" />
          </div>
        </Link>
        <Link href="/contact">
          <div className="details_wrapper">
            <div className="details">Contact</div>
            <img src="/contact.jpg" alt="contact" width="100%" height="100%" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Body;
