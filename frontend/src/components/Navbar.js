import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง วิทยาเขตชุมพรเขตรอุดมศักดิ์
      </h2>
      <h2 href="#" className="login-link">เข้าสู่ระบบ</h2>
    </nav>
  );
}

export default Navbar;

