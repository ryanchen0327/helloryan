import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Firebase', 'Material-UI'],
      category: 'web',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Python', 'TensorFlow', 'Flask'],
      category: 'ai',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React Native', 'Redux', 'Firebase'],
      category: 'mobile',
      link: '#',
      github: '#',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 