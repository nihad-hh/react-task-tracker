import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyrigh &copy; 2023</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;