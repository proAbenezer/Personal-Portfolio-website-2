import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__box--content">Home</div>
      </div>

      <ul className="footer__links--container">
        <li className="footer__link">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="footer__link--icon" />
          </a>
        </li>
        <li className="footer__link">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} className="footer__link--icon" />
          </a>
        </li>{" "}
        <li className="footer__link">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faTelegram} className="footer__link--icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
