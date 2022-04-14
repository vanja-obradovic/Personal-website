/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

const submitok: NextPage = () => {
  return (
    <div
      className="page_wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <div className="about_contact_text">
        <h1>Submit successful</h1>
      </div>
    </div>
  );
};

export default submitok;
