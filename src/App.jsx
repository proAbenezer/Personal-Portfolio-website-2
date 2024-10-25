import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";
const App = () => {
  const [isSidebarOpen, setIsSidebaropen] = useState(false);
  const handleMenuBarClick = () => setIsSidebaropen((prevValue) => !prevValue);
  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainComponent handleMenuBarClick={handleMenuBarClick} />
    </div>
  );
};

export default App;
