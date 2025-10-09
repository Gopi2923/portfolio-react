import React from 'react'
import './ExperienceTimeline.css'

const experiences = [
  {
    title: 'SOFTWARE ENGINEER',
    company: 'Ahana Systems and Solutions',
    period: 'December 2024 - Present'
  },
  {
    title: 'SOFTWARE DEVELOPER',
    company: 'Swastha Technovations Pvt Ltd',
    period: 'February 2024 - November 2024'
  },
  {
    title: 'FRONTEND DEVELOPER',
    company: 'Skillmine Technology',
    period: 'May 2022 – January 2024'
  }
]

const ExperienceTimeline = () => {
  return (
    <div id='experience' className='experience-timeline'>
      <div className='experience-title'>
        <h1>Experience</h1>
      </div>
      <ol className='timeline'>
        {experiences.map((exp, idx) => (
          <li key={idx} className='timeline-item'>
            <div className='timeline-marker' />
            <div className='timeline-content'>
              <h3 className='role'>{exp.title}</h3>
              <p className='company'>{exp.company}</p>
              <p className='period'>{exp.period}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ExperienceTimeline


