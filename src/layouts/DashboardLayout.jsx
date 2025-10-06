import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../assets/css/main/main.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
      if (window.innerWidth > 770) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {isSmallScreen && (
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}

      <Header />
      <div className="layout">
        <Sidebar isOpen={sidebarOpen} />
        <main
          className={`main-content ${
            sidebarOpen && isSmallScreen ? "blur" : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
