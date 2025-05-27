import { useEffect, useRef } from 'react'

const Skills = () => {
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

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'SQL', level: 75 },
      ],
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        <div className="skills-content">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Sass</span>
            <span className="skill-tag">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 