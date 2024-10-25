import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
const Home = ({ handleMenuBarClick }) => {
  return (
    <section className="home">
      <FontAwesomeIcon
        icon={faBars}
        className="home__menubar"
        onClick={handleMenuBarClick}
      />
    </section>
  );
};

export default Home;
