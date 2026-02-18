import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from './Shared/Navbar';
import Home from './MainComponent/Home';

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sectionRefs = { homeRef, projectRef, skillsRef, aboutRef };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar scrollToSection={scrollToSection} refs={sectionRefs} />
        <Routes>
          <Route path='/' element={<Home sectionRefs={sectionRefs} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
