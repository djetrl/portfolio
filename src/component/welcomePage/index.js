
import './welcomePage.scss';
import video  from '../../assets/video/istockphoto-1046965704-640_adpp_is.mp4'
const WelcomePage = ()=>{
  return(
    <div className="container">
      <div className="welcomePage wow fadeInLeft ">
        <div className="welcomePage-container">
          <video className='video-bg'  muted="muted" autoplay="autoplay"  loop  src={video} ></video>
        </div>
      </div>
    </div>
  )
}


export default WelcomePage;