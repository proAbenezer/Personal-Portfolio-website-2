import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import "./App.css";
const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleMenuBarClick = () => setIsNavbarOpen((prevValue) => !prevValue);
  return (
    <div className="app">
      <Navbar isNavbarOpen={isNavbarOpen} />
      <MainComponent handleMenuBarClick={handleMenuBarClick} />
      <About />
      <Footer />
    </div>
  );
};

export default App;
