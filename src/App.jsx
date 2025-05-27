import React, { useState, useEffect } from 'react'
import './index.css'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import BeyondAcademic from './components/BeyondAcademic'
import Publications from './components/Publications'
import CursorTracer from './components/CursorTracer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const userPref = localStorage.getItem('theme');
    if (userPref === 'light') return false;
    if (userPref === 'dark') return true;
    return true; // Default to dark mode
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <>
      <CursorTracer />
      <button
        className={darkMode ? 'theme-toggle dark' : 'theme-toggle light'}
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div className="app">
        <Profile />

        <div className="right-column">
          <section className="section">
            <h2 className="section-title">About</h2>
            <About />
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>
            <Projects />
          </section>

          <section className="section">
            <h2 className="section-title">Other thingss</h2>
            <BeyondAcademic />
          </section>

          <section className="section">
            <h2 className="section-title">Publications</h2>
            <Publications />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
