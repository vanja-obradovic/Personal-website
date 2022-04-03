import type { NextPage } from "next";
import Body from "../components/body";
import Footer from "../components/footer";
import navbarStyle from "../styles/navbar.module.css";

const Home: NextPage = () => {
  return (
    <div className="page_wrapper">
      <header className="home_header">Vanja Obradovic</header>

      <Body />

      <Footer />
    </div>
  );
};

export default Home;
