import Link from "next/link";
import moment from "moment";

const Footer = () => {
  return <footer>{moment().format("hh:mm DD-MM-YYYY")}</footer>;
};

export default Footer;
