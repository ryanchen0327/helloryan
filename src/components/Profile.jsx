import React from 'react'

const Profile = () => {
  return (
    <div className="left-column">
      <div className="profile-section">
        <img src="/profile.jpg" alt="Ryan Chen" className="profile-image" />
        {/* <h1 className="profile-name">Ryan Chen</h1> */}
        <p className="profile-title">🏛️ UPenn CIS</p>
      </div>
      
      <div className="social-links">
        <a href="mailto:ryanchen@seas.upenn.edu" className="social-link" data-tooltip="Email">
          <i className="fas fa-envelope"></i>
          <span className="link-text">ryanchen@seas.upenn.edu</span>
        </a>
        <a href="https://github.com/ryanchen0327" className="social-link" data-tooltip="GitHub">
          <i className="fab fa-github"></i>
          <span className="link-text">github.com/ryanchen0327</span>
        </a>
        <a href="https://www.linkedin.com/in/sirui-chen-48760622b/" className="social-link" data-tooltip="LinkedIn">
          <i className="fab fa-linkedin"></i>
          <span className="link-text">LinkedIn Profile</span>
        </a>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="social-link" data-tooltip="Resume" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-download"></i>
          <span className="link-text">Download Resume</span>
        </a>
      </div>

      <div className="contact-info">
        <p>📍 Philadelphia, PA</p>
      </div>
    </div>
  )
}

export default Profile 