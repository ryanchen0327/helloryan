import React from 'react'
import './index.css'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import BeyondAcademic from './components/BeyondAcademic'
import Publications from './components/Publications'

function App() {
  return (
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
  )
}

export default App
