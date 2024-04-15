import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div className='Services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return <div key={index} className="services-format">
             <h3>{services.s_no}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
