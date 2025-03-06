import React, { useState } from "react";
import "./Navbar2.css";
import { Pic1 } from '../Photo/component';

function Navbar2() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar2">
        <div className="menu-container">
          <div className="menu-icon" onClick={toggleSidebar}>☰</div>
          <img src={ Pic1 } className="logo1" alt="Logo1" />
          <span className="brand-name">KMITL CE</span>
        </div>
        <a href="#" className="home-link">หน้าหลัก</a>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="close-btn" onClick={toggleSidebar}>×</span>
        </div>
        <ul className="sidebar-menu">
          <li><a href="#">นักศึกษา & บุคลากร CE</a></li>
          <li><a href="#">ศิษย์เก่า CE & ITE</a></li>
          <li><a href="#">ครุภัณฑ์การศึกษา CE</a></li>
          <li><a href="#">ฝึกงาน & สหกิจศึกษา</a></li>
          <li><a href="#">ข่าวสาร & กิจกรรมของหลักสูตร</a></li>
          <li><a href="#">หลักสูตร & แผนการเรียน CE</a></li>
          <li><a href="#">แต้มบุญ</a></li>
        </ul>
      </div>

      {/* Overlay (กดแล้วปิด Sidebar) */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar2;



