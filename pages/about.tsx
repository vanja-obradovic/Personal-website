import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      About me page
      <Footer />
    </div>
  );
};

export default About;
