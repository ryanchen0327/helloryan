const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="text-gradient">RC</span>
            </a>
            <p>
              Building digital experiences that make an impact.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://github.com/ryanchen0327" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ryan Chen. All rights reserved.</p>
          <div className="footer-social">
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
      </div>
    </footer>
  )
}

export default Footer 