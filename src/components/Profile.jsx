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
        <a href="mailto:ryanchen@seas.upenn.edu" className="social-link">
          <i className="fas fa-envelope"></i> ryanchen@seas.upenn.edu
        </a>
        <a href="https://github.com/ryanchen0327" className="social-link">
          <i className="fab fa-github"></i> github.com/ryanchen0327
        </a>
        <a href="https://www.linkedin.com/in/sirui-chen-48760622b/" className="social-link">
          <i className="fab fa-linkedin"></i> LinkedIn Profile
        </a>
        <a href="/resume.pdf" className="social-link" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>

      <div className="contact-info">
        <p>📍 Philadelphia, PA</p>
      </div>
    </div>
  )
}

export default Profile 