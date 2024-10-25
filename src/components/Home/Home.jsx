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

      <div className="home__text">
        <p className="home__text--welcome">
          Welcome, The name is Abenezer Haile
        </p>
        <h1 className="ascii-art">
          {`  _   _                      
 | | | | ___  _ __ ___   ___ 
 | |_| |/ _ \\| '_ \` _ \\ / _ \\
 |  _  | (_) | | | | | |  __/
 |_| |_|\\___/|_| |_| |_|\\___|`}
        </h1>

        <p>Fullstack Web Developer | Competitive Programmer</p>
        <p>
          &gt; Location: Hawassa, Ethiopia &gt; Hometown: Addis Ababa, Ethiopia
        </p>
        <p>&gt; School: Hawassa University</p>
        <p>&gt; Age: 20</p>
        <p>
          &gt; Explore my projects, learn about my journey, or connect with me.
        </p>
      </div>
    </section>
  );
};

export default Home;
