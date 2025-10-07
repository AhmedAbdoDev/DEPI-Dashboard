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
      <div className="logo">Dashboard</div>

      <ul className="menu">
        <li>
          <Link to="/dashboard/" className="menu-btn" as="button">
            <span className="svg">
              <FaTachometerAlt />
            </span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/candidates" className="menu-btn" as="button">
            <span className="svg">
              <FaProjectDiagram />
            </span>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/dashboard/tasks" className="menu-btn" as="button">
            <span className="svg">
              <FaTasks />
            </span>
            My Tasks
          </Link>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaComments />
            </span>
            Chats
          </button>
        </li>
        <li>
          <button className="menu-btn">
            <span className="svg">
              <FaFileAlt />
            </span>
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
