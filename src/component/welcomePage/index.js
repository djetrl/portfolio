import { animated, useInView } from '@react-spring/web';
import './welcomePage.scss';
import video  from '../../assets/video/video.mp4'

const WelcomePage = ()=>{
  const [ref, springs]  = useInView(
    () => ({
      
      from: {
        opacity: 0,
        transform:'translateX(-100%)'
      },
      to: {
        transform:'translateX(0)',
        opacity: 1,
      },
      config:{
        tension: 80, 
        friction: 40,
      }
    }),
    {   
      rootMargin: '-31% 0px',

    }
  )

  return(
    <div className="container">
      <animated.div className="welcomePage" style={springs} ref={ref} >
        <div className="welcomePage-container">
          <video className='video-bg'  muted="muted" autoPlay="autoplay"  loop  src={video} ></video>
        </div>
      </animated.div>
    </div>
  )
}


export default WelcomePage;