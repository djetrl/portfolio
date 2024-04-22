import './Portfolio.scss';
import github from '../../assets/img/iconProfile/github.svg';
import site from '../../assets/img/iconProfile/website.svg';
import {FancyBox} from '../';
import { ReactSVG } from 'react-svg';

import Koin1 from '../../assets/img/Profile/koin/Koin1.jpg';
import Koin2 from '../../assets/img/Profile/koin/Koin2.jpg';
import Koin3 from '../../assets/img/Profile/koin/Koin3.jpg';


import coffeReactProject1 from '../../assets/img/Profile/coffeReactProject/1.jpg';
import coffeReactProject2 from '../../assets/img/Profile/coffeReactProject/2.jpg';
import coffeReactProject3 from '../../assets/img/Profile/coffeReactProject/3.jpg';

import chatFrontend1 from '../../assets/img/Profile/chat-frontend/1.jpg';
import chatFrontend2 from '../../assets/img/Profile/chat-frontend/2.jpg';
import chatFrontend3 from '../../assets/img/Profile/chat-frontend/3.jpg';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="Portfolio" id='portfolio'>
        <div className="Portfolio-content">
            <div className="Portfolio-item  wow fadeInRight ">
              <div className="Portfolio-item-text">
                  <h1 className="wow fadeInUp" data-wow-duration="2s">
                    Koin
                    <ul className="Portfolio_links">
                      <li className='Portfolio_link'><a href='https://github.com/djetrl/koin'><ReactSVG src={github}/></a></li>
                      <li className='Portfolio_link'><a href='https://djetrl.github.io/koin/'><ReactSVG src={site}/></a></li>
                    </ul>
                  </h1>
                  <p className="wow fadeInUp" data-wow-duration="3s">
                   Лендинг для технологического стартапа с минималистичным дизайном, написан на чистом html с использованием препроцессора scss, имееться адаптив.
                  </p>
              </div>
              <FancyBox   options={{
                            Carousel: {
                              infinite: false,
                            },
                          }}> 
                  <div  className='Portfolio-item-imgContainer wow fadeInUp'  data-wow-duration="1s">
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={Koin1}>
                        <img src={Koin1} alt="koin1" />
                      </a>
                    </div>
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={Koin2}>
                        <img src={Koin2} alt="koin2" />
                      </a>
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={Koin3}>
                        <img src={Koin3} alt="koin3" />
                      </a>
                    </div>
                  </div>
              </FancyBox>
            </div>
            <div className="Portfolio-item  wow fadeInLeft ">
              <div className="Portfolio-item-text" >
                  <h1 className="wow fadeInUp" data-wow-duration="2s">  
                  CoffeReactProject
                  <ul className="Portfolio_links">
                    <li className='Portfolio_link'><a href='https://github.com/djetrl/coffeReactProject'><ReactSVG src={github}/></a></li>
                    <li className='Portfolio_link'><a href='https://djetrl.github.io/coffeReactProject/'><ReactSVG src={site}/></a></li>
                  </ul>
                  </h1>
                  <p className="wow fadeInUp" data-wow-duration="3s">
                     Многостраничный сайт для магазина зерен кофе, сайт был написан с использованием ReactJS.
                  </p>

              </div>
              <FancyBox   options={{
                            Carousel: {
                              infinite: false,
                            },
                          }}> 
                  <div  className='Portfolio-item-imgContainer wow fadeInUp'  data-wow-duration="1s">
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={coffeReactProject1}>
                        <img src={coffeReactProject1} alt="coffeReactProject1" />
                      </a>
                    </div>
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={coffeReactProject2}>
                        <img src={coffeReactProject2} alt="coffeReactProject2" />
                      </a>
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={coffeReactProject3}>
                        <img src={coffeReactProject3} alt="coffeReactProject3" />
                      </a>
                    </div>
                  </div>
              </FancyBox>

            </div>

            <div className="Portfolio-item  wow fadeInRight ">
              <div className="Portfolio-item-text" >
                  <h1 className="wow fadeInUp" data-wow-duration="2s">  
                  Chat-FrontEnd
                  <ul className="Portfolio_links">
                    <li className='Portfolio_link'><a href='https://github.com/djetrl/chat-fontend'><ReactSVG src={github}/></a></li>
                  </ul>
                  </h1>
                  <p className="wow fadeInUp" data-wow-duration="3s">
                    Многостраничное веб-приложения представляющие из себя FrontEnd часть мессенджера. Сайт был написан с использованием ReactJS.
                  </p>

              </div>
              
              <FancyBox   options={{
                            Carousel: {
                              infinite: false,
                            },
                          }}> 
                  <div  className='Portfolio-item-imgContainer wow fadeInUp'  data-wow-duration="1s">
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={chatFrontend1}>
                        <img src={chatFrontend1} alt="chatFrontend1" />
                      </a>
                    </div>
                    <div className="Portfolio-imgGroup">
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={chatFrontend2}>
                        <img src={chatFrontend2} alt="chatFrontend2" />
                      </a>
                      <a className='Portfolio-imgContainer' data-fancybox="gallery" href={chatFrontend3}>
                        <img src={chatFrontend3} alt="chatFrontend3" />
                      </a>
                    </div>
                  </div>
              </FancyBox>

            </div>
            <div className="Portfolio-item  wow fadeInRight ">
              <div className="Portfolio-item-text" >
                  <h1 className="wow fadeInUp" data-wow-duration="2s">  
                  Chat-BackEnd
                  <ul className="Portfolio_links">
                    <li className='Portfolio_link'><a href='https://github.com/djetrl/chat-backend'><ReactSVG src={github}/></a></li>
                  </ul>
                  </h1>
                  <p className="wow fadeInUp" data-wow-duration="3s">
                    REST full API написанное для веб-приложения "Chat-FrontEnd". При его написанние были использованны следующие технологии:
                    <ul className='list'>
                          <li>NodeJs</li>
                          <li>Express</li>
                          <li>MongoDB</li>
                          <li>Socket.io</li>
                          <li>bcrypt</li>
                    </ul> 
                  </p>

              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;