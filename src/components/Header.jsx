// components/Header.js
import { FaBell, FaSearch } from "react-icons/fa";
import { Navbar, Button } from "react-bootstrap";
import profileImg from "../assets/images/m.jpg";
import "./../App.css";

function Header() {
  return (
    <Navbar className="header-nav">
      <div className="header-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-right">
          <Button className="new-project-btn">+ New Project</Button>
          <FaBell size={20} className="bell-icon" />
          <img src={profileImg} alt="profile" className="profile-img" />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
