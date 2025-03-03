import './App.css';
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Section1 from './components/Section1'
import StepList from './components/StepList';
import Footer from './components/Footer';
import { Download, Facebook, Pic1 ,Pic2} from './Photo/component';
function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Section1 />
      <div className="rectangle">
        ขั้นตอนการดำเนินการขอฝึกงาน / ฝึกประสบการณ์แบบสหกิจศึกษา
      </div>
      <StepList />
      <div className="center-container001">
        <div className="rectangle1">
          รายชื่อบริษัทและสถานประกอบการที่รุ่นพี่เคยไปฝึกงาน
        </div>
      </div>
      <div className="docs">
        <div className="doc-item">
          <a href="/documents/ITE_3_2565.pdf" download className="doc-link">
            ITE_3_2565
          </a>
          <img
            src={ Download }
            alt="Download PDF"
            className="doc-icon"
            onClick={() => window.open('/documents/ITE_3_2565.pdf', '_blank')}
          />
        </div>

        <div className="doc-item">
          <a href="/documents/CE01_3_2566.pdf" download className="doc-link">
            CE01_3_2566
          </a>
          <img
            src={ Download}
            alt="Download PDF"
            className="doc-icon"
            onClick={() => window.open('/documents/CE01_3_2566.pdf', '_blank')}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
