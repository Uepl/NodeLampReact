import './App.css';
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Section1 from './components/Section1'
import StepList from './components/StepList';

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
      <div className='docs'>
        ITE_3_2565
        CE01_3_2566
      </div>
    </>
  );
}

export default App;
