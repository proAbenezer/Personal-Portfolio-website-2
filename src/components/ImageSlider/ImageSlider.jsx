import "./ImageSlider.css";
const ImageSlider = ({ slides }) => {
  return (
    <div className="slider">
      <img src={slides[0]} />
    </div>
  );
};

export default ImageSlider;
