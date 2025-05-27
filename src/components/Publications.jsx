import React from 'react'

const Publications = () => {
  const publications = [
    // {
    //   id: 1,
    //   title: '📝 Mitigating Bias in LLMs through Tree of Thoughts and Beam Search Decoding',
    //   authors: 'Zining Liu, Lixin Li, Pu Tan, Ryan Chen',
    //   venue: 'Under Review',
    //   year: '2024',
    //   link: 'https://drive.google.com/file/d/1BgsNO6o-sQn9hGMty24igBxd7dQ8ZHOC/view?usp=sharing'
    // }
  ]

  return (
    <div>
      {publications.map(pub => (
        <div key={pub.id} className="publication-item">
          <h3 className="publication-title">
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
          </h3>
          <p className="publication-authors">👥 {pub.authors}</p>
          <p className="publication-venue">📅 {pub.venue} ({pub.year})</p>
        </div>
      ))}
    </div>
  )
}

export default Publications 