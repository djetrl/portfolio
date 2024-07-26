import './Portfolio.scss';
import github from '../../assets/img/iconProfile/github.svg';
import site from '../../assets/img/iconProfile/website.svg';
import {FancyBox} from '../';
import { ReactSVG } from 'react-svg';
import { animated, useInView } from '@react-spring/web';
import Item from './item';

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
  const itemData = [
    {
      name:'Koin',
      siteUrl: 'https://github.com/djetrl/koin',
      gitUrl: 'https://djetrl.github.io/koin/',
      descriptions:"Лендинг для технологического стартапа с минималистичным дизайном, написан на чистом html с использованием препроцессора scss, имееться адаптив.",
      image:[Koin1, Koin2, Koin3]
    }, 
    {
      name:'CoffeReactProject',
      siteUrl: 'https://github.com/djetrl/coffeReactProject',
      gitUrl: 'https://djetrl.github.io/coffeReactProject/',
      descriptions:"Многостраничный сайт для магазина зерен кофе, сайт был написан с использованием ReactJS.",
      image:[coffeReactProject1, coffeReactProject2, coffeReactProject3]
    }, 
    {
      name:'Chat',
      siteUrl: null,
      gitUrl: 'https://github.com/djetrl/chat',
      descriptions:"Данный представляет из себя полноценное приложения с backend. В чате были реализованы следующие функции: ",
      image:[chatFrontend1, chatFrontend2, chatFrontend3]
    }, 

  ]
  return (
    <div className="container">
      <div className="Portfolio" id='portfolio'>
        <div className="Portfolio-content">

          {
            itemData.map((item, index) =>{
              return(
                <Item 
                key={item.name}
                name={item.name} 
                siteUrl={item.siteUrl} 
                gitUrl={item.gitUrl} 
                descriptions = {item.descriptions}
                image = {item.image}
              /> 
              )
            })
          }
     
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio;