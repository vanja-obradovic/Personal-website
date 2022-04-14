/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

const errorPage: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <div className="about_contact_text">
        <h1>404</h1>
      </div>
      <Footer />
    </div>
  );
};

export default errorPage;
