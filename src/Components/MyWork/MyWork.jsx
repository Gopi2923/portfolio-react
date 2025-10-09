import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrrow_icon from '../../assets/arrow_icon.svg'
import ExperienceTimeline from '../ExperienceTimeline/ExperienceTimeline'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt=''/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrrow_icon} alt="" />
      </div>
      <ExperienceTimeline />
    </div>
  )
}

export default MyWork
