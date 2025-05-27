import React, { useState, useEffect } from 'react'
import './index.css'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import BeyondAcademic from './components/BeyondAcademic'
import Publications from './components/Publications'
import CursorTracer from './components/CursorTracer'

function App() {
  // On mount, force dark mode unless user has explicitly chosen light
  useEffect(() => {
    const userPref = localStorage.getItem('theme');
    if (!userPref) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const userPref = localStorage.getItem('theme');
    if (userPref === 'light') return false;
    if (userPref === 'dark') return true;
    return true;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <CursorTracer />
      <button
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 10000,
          padding: '8px 16px',
          borderRadius: '20px',
          border: 'none',
          background: darkMode ? '#222' : '#fff',
          color: darkMode ? '#fff' : '#222',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: 16,
          transition: 'background 0.2s, color 0.2s',
        }}
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
