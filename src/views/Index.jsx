import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PhysicsBackground from '../components/PhysicBackground';

function Index() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    // 1. Ensure the main container is relative
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      
      {/* 2. Background Layer (z-0) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <PhysicsBackground />
        
        {/* Subtle grid to add texture so it's not "flat" black */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 3. Content Layer (z-10) - This MUST be higher than the background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-6 md:px-12 grow">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default Index;