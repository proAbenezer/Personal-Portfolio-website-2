import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import { ReactTyped } from "react-typed";
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
        <ReactTyped
          strings={[
            "> Fullstack Web Developer | Competitive Programmer <br /> > Location: Shashemen, Ethiopia<br /> > Explore my projects, learn about my journey, or connect with me. ",
          ]}
          typeSpeed={40}
          loop={false}
          showCursor={true}
          startWhenVisible={true}
          className="home__typedtext"
        />
      </div>
    </section>
  );
};

export default Home;
