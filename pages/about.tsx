/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <div className="about_contact_text">
        <h1>Who am I?</h1>
        <p>
          My name is Vanja Obradovic and I&#39;m a CS student. I&#39;m currently
          working on some small projects to gain experience.
        </p>
        <p>My current areas of interest are:</p>
        <div className="image_container">
          <img src="./html5.svg" alt="html5" className="image" title="html5" />
          <img
            src="./css3.svg"
            alt="css"
            className="image invert"
            title="css"
          />
          <img
            src="./javascript.svg"
            alt="javascript"
            className="image invert"
            title="javascript"
          />
          <img src="./react.svg" alt="react" className="image" title="react" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
