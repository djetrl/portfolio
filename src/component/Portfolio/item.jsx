
import {FancyBox} from '../';
import { ReactSVG } from 'react-svg';
import { animated, useInView } from '@react-spring/web';
import github from '../../assets/img/iconProfile/github.svg';
import site from '../../assets/img/iconProfile/website.svg';
import { useEffect } from 'react';

const Item = ({name, siteUrl, gitUrl, descriptions, image}) => {
  const [ref, springs]  = useInView(
    () => ({
      
      from: {
        opacity: 0,
        transform:'translateX(100%)'
      },
      to: {
        transform:'translateX(0)',
        opacity: 1,
        reverse:false,
      },
      config:{
        tension: 80, 
        friction: 40,
      }
    }),
    {   
      rootMargin: '-50% 0px',

    }
  )


  return (
    <animated.div className="Portfolio-item" ref={ref} style={springs}>
        <div className="Portfolio-item-text">
            <h1 className="wow fadeInUp" data-wow-duration="2s">
            {name}
            <ul className="Portfolio_links">
                <li className='Portfolio_link'><a href={gitUrl}><ReactSVG src={github}/></a></li>
                {siteUrl && <li className='Portfolio_link'><a href={siteUrl}><ReactSVG src={site}/></a></li>}
            </ul>
            </h1>
            <p>{descriptions}</p>
        </div>
        <FancyBox   options={{
                    Carousel: {
                        infinite: false,
                    },
                    }}> 
            <div  className='Portfolio-item-imgContainer wow fadeInUp'  data-wow-duration="1s">
            <div className="Portfolio-imgGroup">
                <a className='Portfolio-imgContainer' data-fancybox="gallery" href={image[0]}>
                <img src={image[0]} alt={`${name}1`} />
                </a>
            </div>
            <div className="Portfolio-imgGroup">
                <a className='Portfolio-imgContainer' data-fancybox="gallery" href={image[1]}>
                <img src={image[1]} alt={`${name}2`} />
                </a>
                <a className='Portfolio-imgContainer' data-fancybox="gallery" href={image[2]}>
                <img src={image[2]} alt={`${name}3`} />
                </a>
            </div>
            </div>
        </FancyBox>
  </animated.div>
  )
}

export default Item;