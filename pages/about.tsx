import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const About: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      About page
      <Footer />
    </div>
  );
};

export default About;
