import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import notifs from "./assets/notifs.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="list-items">
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
      <div className="search-notif">
        <div>
          <img src={search} alt="" className="search" />
        </div>
        <div>
          <img src={notifs} alt="" className="notififcations" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
