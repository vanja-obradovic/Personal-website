import Link from "next/link";
import moment from "moment";

const Footer = () => {
  return (
    <div>
      <footer>{moment().format("hh:mm DD-MM-YYYY")}</footer>
    </div>
  );
};

export default Footer;
