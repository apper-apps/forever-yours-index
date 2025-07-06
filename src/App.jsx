import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FloatingHearts from '@/components/organisms/FloatingHearts';
import HomePage from '@/components/pages/HomePage';
import MusicControls from '@/components/organisms/MusicControls';
import BackToTop from '@/components/molecules/BackToTop';
import CustomCursor from '@/components/atoms/CustomCursor';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'gallery', 'timeline', 'love-cards', 'gifts', 'letter', 'wishes'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollY >= element.offsetTop - windowHeight / 2) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen romantic-bg relative overflow-x-hidden">
        <CustomCursor />
        <FloatingHearts />
        <MusicControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        
        <BackToTop />
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;