import { useEffect, useRef } from 'react'

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: [
        'Led the development of a cloud-based SaaS platform serving 100,000+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries improving application performance by 40%',
      ],
      type: 'work',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Collaborated with UX designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Implemented automated testing reducing bug reports by 30%',
      ],
      type: 'work',
    },
    {
      id: 3,
      title: 'Master of Computer Science',
      company: 'Stanford University',
      period: '2018 - 2020',
      description: [
        'Specialized in Artificial Intelligence and Machine Learning',
        'Graduated with honors (GPA: 3.9/4.0)',
        'Published research paper on deep learning applications',
        'Led student organization for tech innovation',
      ],
      type: 'education',
    },
    {
      id: 4,
      title: 'Bachelor of Science in Computer Science',
      company: 'University of California, Berkeley',
      period: '2014 - 2018',
      description: [
        'Dean\'s List for academic excellence',
        'Senior project: Developed a real-time collaboration platform',
        'Participated in multiple hackathons and coding competitions',
        'Teaching assistant for Data Structures course',
      ],
      type: 'education',
    },
  ]

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Experience & Education</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${exp.type}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 