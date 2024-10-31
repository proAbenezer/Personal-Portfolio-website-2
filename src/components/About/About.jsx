import ImageSlider from "../ImageSlider/ImageSlider";

import "./About.css";

//images
import image1 from "../../assets/images/about-page-image-1.jpg";
import image2 from "../../assets/images/about-page-image-2.jpg";
import image3 from "../../assets/images/about-page-image-3.jpg";

const About = () => {
  return (
    <section className="about">
      <ImageSlider slides={[image1, image2, image3]} />
      <div className="about__text">
        <h1 className="about__text--title">{`<About Me />`}</h1>
        <p className="about__text--description">
          Hi there! I’m Abenezer Haile, a software developer based in
          Shashemene, Ethiopia, with a passion for building innovative solutions
          from scratch. My ambition fuels my desire to take on new challenges
          and grow in my field. I’m a big fan of sci-fi movies and anime, which
          inspire my creativity, and I love working out to stay fit and
          energized. In my downtime, I enjoy reading self-help books and the
          Bible, which help shape my perspective on life. I’m also excited about
          new technologies and their potential to transform our world. I believe
          in the power of collaboration and am eager to connect with others who
          share similar passions!
        </p>
      </div>
      <div className="about__buttons">
        <button className="about__button">{`Let's work togther`}</button>
        <button className="about__button">{`Download Resume`}</button>
      </div>
    </section>
  );
};

export default About;
