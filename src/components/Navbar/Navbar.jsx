import "./Navbar.css";

const Navbar = ({ isNavbarOpen }) => {
  return <nav className={`navbar ${isNavbarOpen ? "open" : "closed"}`}></nav>;
};

export default Navbar;
