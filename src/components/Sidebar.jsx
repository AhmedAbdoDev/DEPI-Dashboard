import {
  FaProjectDiagram,
  FaTasks,
  FaComments,
  FaFileAlt,
  FaTachometerAlt,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

import "./../App.css";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">Monday</div>

      <ul className="menu">
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaTachometerAlt />
            </span>

            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Dashboard
            </Link>
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaProjectDiagram />
            </span>
            <Link
              to="/candidates"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Projects
            </Link>
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaTasks />
            </span>
            <Link
              to="/tasks"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              My Tasks
            </Link>
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaComments />
            </span>{" "}
            Chats
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaFileAlt />
            </span>{" "}
            Documents
          </button>
        </li>
      </ul>

      <div className="projects">
        <div className="proo">
          <p>
            Projects
            <button className="add-btn">+</button>
          </p>
        </div>

        <ul>
          <li>
            <span className="dot pink"></span> Event Plan
          </li>
          <li>
            <span className="dot green"></span>Breakfast Plan
          </li>
        </ul>
      </div>

      <ul className="bottom-menu">
        <li>
          <button className="menu-btn">
            <FaCog /> Settings
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <FaQuestionCircle /> Support
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
