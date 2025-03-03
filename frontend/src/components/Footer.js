import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-title">แนะนำ</div>
        {[
          { text: "นักศึกษา & บุคลากร CE", link: "#" },
          { text: "ศิษย์เก่า CE & ITE", link: "#" },
          { text: "ครุภัณฑ์การศึกษา CE", link: "#" },
          { text: "ฝึกงาน & สหกิจศึกษา", link: "#" },
          { text: "กิจกรรมหลักสูตร", link: "#" },
          { text: "หลักสูตร & แผนการเรียน CE", link: "#" },
          { text: "แต้มบุญ", link: "#" },
        ].map((item, index) => (
          <a key={index} href={item.link} className="footer-item">
            {item.text}
          </a>
        ))}
      </div>

      <div className="footer-right">
        <div className="footer-title">ติดต่อเรา</div>
        <div className="footer-contact">
          สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </div>
        <div className="footer-contact">
          วิทยาเขตชุมพรเขตรอุดมศักดิ์ จังหวัดชุมพร
        </div>
        <div className="footer-contact">
          17/1 หมู่6 ต.ชุมโค อ.ปะทิว จ.ชุมพร 86160
        </div>

        <div className="footer-logo">
          <img src="logo.png" alt="Computer Engineering KMITL, PCC" />
          <span>Computer Engineering KMITL, PCC</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

