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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/submitok"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name:{" "}
              <input type="text" name="name" className="input_style" required />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                className="input_style"
                required
              />
            </label>
          </p>
          <p className="input_text">
            <label className="textarea_wrapper">
              Message:{" "}
              <textarea
                name="message"
                className="input_textarea"
                required
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit" className="submit_btn">
              Send
            </button>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
