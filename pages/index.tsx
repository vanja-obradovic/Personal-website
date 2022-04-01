import type { NextPage } from "next";
import Body from "../components/body";
import Footer from "../components/footer";
import navbarStyle from "../styles/navbar.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <header className="home_header">Vanja Obradovic</header>

      <main>
        <Body />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
