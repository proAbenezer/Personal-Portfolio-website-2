import Home from "../Home/Home";
import "./MainComponent.css";

const MainComponent = ({ handleMenuBarClick }) => {
  return (
    <main className="main">
      <Home handleMenuBarClick={handleMenuBarClick} />
    </main>
  );
};

export default MainComponent;
