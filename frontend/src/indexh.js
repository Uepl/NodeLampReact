import './index.css';
import { Download, Facebook, Pic1 , Pic2 } from './img/component.js'
function Home() {
    return (
      <div style={{ width: "100%" }}>
        {/* <!-- navbar --> */}
        <div>
          <nav class="navbar">
            <div class="logo">
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
              วิทยาเขตชุมพรเขตรอุดมศักดิ์
            </div>
            <ul class="nav-links">
              <li>
                <a href="#">เข้าสู่ระบบ</a>
              </li>
            </ul>
          </nav>

          {/* <!-- <script>
                function toggleMenu() {
                    document.querySelector('.nav-links').classList.toggle('active');
                }
            </script> --> */}

          <nav class="navbar2">
            <div class="menu-icon" onclick="toggleMenu()">
              ☰
            </div>

            <div class="logo">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{fontSize: '30px', marginTop: '15px'}}>☰</div>
                {/* <!-- สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง วิทยาเขตชุมพรเขตรอุดมศักดิ์ --> */}
                <img
                  src={Pic1}
                  alt="logo"
                  style={{ width: '85px', height: '86px', paddingLeft: '25px'}}
                />
                <div
                    style={{
                        fontSize: '25px',
                        marginLeft: '25px',
                        fontFamily: 'Noto Sans Thai',
                    }}
                    >
                  KMITL PCC
                </div>
              </div>
            </div>
            <ul class="nav-links2">
              <li>
                <a href="#">หน้าหลัก</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- navbar --> */}
        {/* <!-- top content --> */}
        <div
          style={{
            width: "100%",
            height: "331px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ Pic2 }
            alt=""
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                zIndex: -1,
            }}
          />
          <div
            const myStyle = {{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
              }}
          ></div>
          <span style={{ textAlign: 'center', color: 'aliceblue', zIndex: 1 }}>
            <h1 style={{fontSize: '72px'}}>ข้อมูลการฝึกงานและสหกิจ</h1>
            <p style={{fontSize: '30px'}}>
              ขั้นตอนการดำเนินการขอฝึกงาน / ฝึกประสบการณ์แบบสหกิจศึกษา
            </p>
          </span>
        </div>

        <div
            style={{
                width: '100%',
                height: '1813px',
                backgroundColor: '#eeeeee',
                position: 'relative',
            }}
            >
            <div
            style={{
                backgroundColor: '#d46518',
                width: '45%',
                textAlign: 'center',
                position: 'absolute',
                top: '10vh',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '10px',
            }}
            >
            <p style={{ fontSize: '30px', color: 'aliceblue' }}>
              ขั้นตอนการดำเนินการขอฝึกงาน / ฝึกประสบการณ์แบบสหกิจศึกษา
            </p>
          </div>
          <div
            style={{
                width: '100%',
                position: 'absolute',
                textAlign: 'center',
                top: '15%',
                fontSize: '30px',
            }}
            >
            <p>
              1.ติดต่อสถานประกอบการด้วยตนเอง
              (สอบถามข้อมูลการรับเข้าฝึกงาน/ฝึกสหกิจศึกษา)
              <br />
              2.กรอกแบบคำร้อง
              (แบบคำร้องขอจดหมายอนุเคราะห์รับนักศึกษาเข้าฝึกงาน/ฝึกสหกิจศึกษา)
              <br />
              3.ส่งเอกสารที่เลขาภาควิชา (ห้อง A216 ชั้น 2 อาคารสมเด็จพระเทพฯ)
              ระยะเวลา 7-10 วันทำการ
            </p>
            <p>
              4.หนังสือราชการ “ขอความอนุเคราะห์ให้นักศึกษาฝึกงาน/ฝึกสหกิจศึกษา”
              <a href="#">
                <img src={Download} alt="download" />
              </a>
            </p>
            <p>
              5.ส่งเอกสาร “ขอความอนุเคราะห์ให้นักศึกษาฝึกงาน/ฝึกสหกิจศึกษา”
              <br />
              5.1 นักศึกษาดำเนินการส่งเอกสารด้วยตนเอง
              <br />
              5.2 งานกิจการนักศึกษาดำเนินการส่งเอกสารให้
              <br />
              6.สถานประกอบการตอบรับ ให้นักศึกษาทำการส่งแบบตอบรับที่เลขาภาควิชา
              ระยะเวลา 10-20 วันทำการ
              <br />
              7.งานกิจการนักศึกษาจะทำการออกหนังสือ
              “ส่งตัวนักศึกษาเข้าฝึกงาน/ฝึกสหกิจศึกษา” (ห้อง A216 ชั้น 2
              อาคารสมเด็จพระเทพฯ) <br />
              <br />
              **รับเอกสารก่อนออกฝึกงาน/ฝึกประสบการณ์แบบสหกิจศึกษา 1 สัปดาห์**
            </p>

            <div
                style={{
                    backgroundColor: '#d46518',
                    width: '45%',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '70vh',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '10px',
                }}
                >
              <p style={{ fontSize: '30px', color: 'aliceblue' }}>
                รายชื่อบริษัทและสถานประกอบการที่รุ่นพี่เคยไปฝึกงาน
              </p>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '85vh',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'aliceblue',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '7vh',
                    padding: '0 10px',
                }}
                >
              <p>ITE_3_2565</p>
              <span>
                <a href="#">
                  <img src={Download} alt="download" />
                </a>
              </span>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '95vh',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'aliceblue',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '7vh',
                    padding: '0 10px',
                }}
                >
              <p>CE01_3_2566</p>
              <span>
                <a href="#">
                  <img src={Download} alt="download" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* <!-- content --> */}

        {/* <!-- footer --> */}

        <footer style={{ backgroundColor: '#203864', color: 'white', padding: '40px 0' }}>
        <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            width: '40%',
            margin: '0 auto',
            }}
        >
            {/* <!-- คอลัมน์ 1 --> */}
            <div style={{ marginBottom: '20px', marginRight: '50px' }}>
              <h3>
                <strong>แนะนำ</strong>
              </h3>
              <p class="fcontent">นักศึกษา & บุคลากร CE</p>
              <p class="fcontent">ศิษย์เก่า CE & ITE</p>
              <p class="fcontent">ครุภัณฑ์การศึกษา CE</p>
              <p class="fcontent">ฝึกงาน & สหกิจศึกษา</p>
              <p class="fcontent">กิจกรรมหลักสูตร</p>
              <p class="fcontent">แต้มบุญ</p>
            </div>
            <div style={{ marginBottom: '20px', paddingBottom: '50px' }}>
              <h3>
                <strong>ติดต่อเรา</strong>
              </h3>
              <p style={{color: '#f79b5b'}}>
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                วิทยาเขตชุมพรเขตรอุดมศักดิ์ จังหวัดชุมพร 17/1 หมู่ 6 ต.ชุมโค
                อ.ปะทิว จ.ชุมพร 86160
              </p>
              <p style={{display: 'flex', alignItems: 'center'}}>
                <a href="#">
                  <img
                    src={Facebook}
                    alt="facebook"
                    style={{paddingRight: '15px'}}
                  />
                </a>
                Computer Engineering KMITL, PCC
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Home;