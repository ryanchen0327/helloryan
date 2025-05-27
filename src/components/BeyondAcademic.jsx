import React from 'react'

const BeyondAcademic = () => {
  const activities = [
    {
      category: 'Hobbies',
      items: ['Travel', 'CS:GO(I will update some clips later)']
    },
    {
      category: 'Sports',
      items: ['🏂 Snowboarding', '🏀 Basketball']
    }
  ]

  return (
    <div className="beyond-academic-container">
      {activities.map((activity, index) => (
        <div key={index} className="activity-category-line">
          <span className="activity-category-title">{activity.category}:</span>
          <span className="activity-items-inline">
            {activity.items.join(', ')}
          </span>
        </div>
      ))}
    </div>
  )
}

export default BeyondAcademic 