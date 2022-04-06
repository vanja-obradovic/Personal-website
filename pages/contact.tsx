/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <div className="about_contact_text">
        <h1>Contact</h1>
        <p>Work in progress</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
