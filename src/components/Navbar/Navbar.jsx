import "./Navbar.css";
import NavLInks from "./NavLinks";

const Navbar = ({ isNavbarOpen }) => {
  return (
    <nav className={`navbar ${isNavbarOpen ? "open" : "closed"}`}>
      <ul className="nav__links--container">
        <NavLInks text={"Home"} />
        <NavLInks text={"About"} />
        <NavLInks text={"Project"} />
        <NavLInks text={"Skills"} />
        <NavLInks text={"Contact"} />
      </ul>
    </nav>
  );
};

export default Navbar;
