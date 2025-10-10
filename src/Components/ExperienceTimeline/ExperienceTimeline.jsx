import { useEffect } from 'react'
import './ExperienceTimeline.css'

const experiences = [
  {
    title: 'SOFTWARE ENGINEER',
    company: 'Ahana Systems and Solutions',
    period: 'December 2024 - Present',
    details: [
      'Developed and optimized ERP modules (Magod Laser project) using React, Node.js, MySQL, and Tailwind CSS.',
      'Enhanced API integrations, improving data sync speed by 25%.',
      'Reduced UAT and production bug backlog by 30%, improving release stability.',
      'Collaborated with cross-functional teams, delivering 5+ feature enhancements that boosted ERP adoption.'
    ]
  },
  {
    title: 'SOFTWARE DEVELOPER',
    company: 'Swastha Technovations Pvt Ltd',
    period: 'February 2024 - November 2024',
    details: [
      'Built kiosk machine software UI with React, JavaScript, and Electron; deployed across 10+ kiosks.',
      'Designed a temple ticket booking app handling 500+ daily transactions with zero downtime.',
      'Implemented responsive UIs using Tailwind CSS, reducing rendering issues by 40%.',
      'Partnered with backend teams to ensure real-time API-driven updates.'
    ]
  },
  {
    title: 'FRONTEND DEVELOPER',
    company: 'Skillmine Technology',
    period: 'May 2022 – January 2024',
    details: [
      'Developed Employee Database App with HR & Employee login views, enabling role-based data access for 200+ staff.',
      'Built Data Visualization app that improved reporting speed by 35% and enhanced decision-making.',
      'Collaborated on multiple projects using React, Node.js, and MongoDB, delivering production-ready solutions on time.'
    ]
  }
]

const ExperienceTimeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-content')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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
              {exp.details && (
                <ul className='details'>
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ExperienceTimeline


