import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <div className="logo-text">
            <span className="logo-g">G</span>
            <span className="logo-o">O</span>
            <span className="logo-p">P</span>
            <span className="logo-i">I</span>
            <span className="logo-d">D</span>
          </div>
          <div className="js-badge">JS</div>
        </div>
        
        <div className="loading-text">
          <span className="loading-title">Frontend Developer</span>
          <span className="loading-subtitle">Crafting Digital Experiences</span>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
        
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="loading-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
