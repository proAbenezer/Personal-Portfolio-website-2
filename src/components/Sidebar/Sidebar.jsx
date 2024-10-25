import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {
  console.log(isSidebarOpen);
  return (
    <section
      className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
    ></section>
  );
};

export default Sidebar;
