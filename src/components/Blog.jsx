import { useEffect, useRef } from 'react'

const Blog = () => {
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
    <section id="blog" className="blog" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Blog</span>
        </h2>
        <div className="blog-content">
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  )
}

export default Blog 