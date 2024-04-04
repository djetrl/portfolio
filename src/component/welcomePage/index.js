
import './welcomePage.scss';
import video  from '../../assets/video/istockphoto-1046965704-640_adpp_is.mp4'
const WelcomePage = ()=>{
  return(
    <div className="container">
      <div className="welcomePage">
        <div className="welcomePage-container">
          <video className='video-bg'  muted="muted" autoplay="autoplay"  loop  src={video} ></video>
          <div className="card">
              <span className='card-text'>
                <h1>Меня зовут Алексей</h1>
                <p>frontend-developer</p>
              </span>
              <span  className='card-btn'>
                <span className='textWithUnderline'>К контакты</span>
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WelcomePage;