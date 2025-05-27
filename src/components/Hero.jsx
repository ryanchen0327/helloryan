import { useEffect, useRef } from 'react'

const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    if (text) {
      const words = text.textContent.split(' ')
      text.textContent = ''
      words.forEach((word, i) => {
        const span = document.createElement('span')
        span.textContent = word + ' '
        span.style.animationDelay = `${i * 0.1}s`
        text.appendChild(span)
      })
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name text-gradient">Ryan Chen</span>
          </h1>
          <h2 className="hero-subtitle" ref={textRef}>
            Full Stack Developer & Creative Technologist
          </h2>
          <p className="hero-description">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered
            digital solutions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/ryanchen0327" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="blob"></div>
          <div className="tech-stack">
            <span className="tech-item">React</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">Python</span>
            <span className="tech-item">AWS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 