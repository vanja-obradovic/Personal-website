/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import Link from "next/link";
import Cards from "../components/cards";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="page_wrapper">
      <div className="start">
        <h1>Hi, my name is Vanja and I make websites together with 🐭</h1>
        <div>
          <Link href="#card_section">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/long-arrow-down.png"
              alt=""
              className="start_arrow"
            />
          </Link>
        </div>
      </div>
      {/* <section > */}
      <Cards />
      {/* </section> */}
      <Footer />
    </div>
  );
};

export default Home;
