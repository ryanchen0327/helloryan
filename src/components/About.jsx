import { useEffect, useRef } from 'react'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a keen eye for creating
              elegant solutions to complex problems. With a strong foundation in
              both front-end and back-end development, I strive to build
              applications that are not only functional but also provide an
              exceptional user experience.
            </p>
            <p>
              My journey in software development began with a curiosity about how
              things work on the web. This curiosity has evolved into a deep
              passion for creating innovative solutions that make a difference.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Ryan Chen</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">your.email@example.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">San Francisco, CA</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Open to opportunities</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 