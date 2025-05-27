import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: 'My project preferences',
      description: 'T',
      // No link provided for this project
      tags: ['SciFy', 'Dense Captioning', 'Finetuning for Planning', 'Multi-agent Playground'],
      collaborators: ['Hi!']
    },
    {
      id: 1,
      title: 'CambioML - Python Developer Intern',
      description: 'Built a scalable search engine for datasets',
      // link: 'https://github.com/ryanchen0327',
      tags: ['Python', 'AWS CDK', 'LLM', 'Selenium', 'Data Engineering', 'danswer ai'],
      // details: [
      //   '🏗️ Architected and deployed metadata crawling system for 5,000+ datasets across AWS Data Exchange, Datarade, and Snowflake platforms',
      //   '🤖 Integrated LLM-powered search engine using the Danswer framework, enabling natural language queries across diverse datasets',
      //   '☁️ Automated infrastructure provisioning with AWS CDK, ensuring consistent deployment pipelines across staging and production environments'
      // ],
      // period: 'Dec. 2023 – Mar. 2024',
      // location: 'San Jose, CA'
    },
    {
      id: 3,
      title: 'LLM Bias Mitigation',
      description: 'Addressed bias in LLM outputs',
      link: 'https://drive.google.com/file/d/1BgsNO6o-sQn9hGMty24igBxd7dQ8ZHOC/view?usp=sharing',
      tags: ['NLP', 'LLM', 'Bias Mitigation', 'Tree of Thoughts', 'Beam Search'],
      collaborators: ['Zining Liu', 'Lixin Li', 'Pu Tan']
    },
    {
      id: 4,
      title: '♿️ F1Tenth but not racing',
      description: 'Computer vision-assisted autonomous racing car implementation using ROS framework and ml.',
      // link: 'https://github.com/ryanchen0327',
      tags: ['ML', 'ROS', 'Computer Vision', 'Autonomous Systems'],
      collaborators: ['Xinghang Ma']
    }
  ]

  return (
    <div>
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <h3 className="project-title">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              <span>{project.title}</span>
            )}
          </h3>
          {project.period && (
            <p className="project-period">{project.period}</p>
          )}
          {project.location && (
            <p className="project-location">{project.location}</p>
          )}
          <p className="project-description">{project.description}</p>
          {project.details && (
            <ul className="project-details">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          {project.collaborators && (
            <p className="project-collaborators">
              <strong>👥 Collaborators:</strong> {project.collaborators.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Projects 