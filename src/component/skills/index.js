
import { animated, useInView } from '@react-spring/web';


import './skills.scss';
import { ReactSVG } from 'react-svg'
import ReactJS from '../../assets/img/IconSkill/ReactJS.svg';
import ant from '../../assets/img/IconSkill/ant.svg';
import bootstrap from '../../assets/img/IconSkill/bootstrap.svg';
import Figma from '../../assets/img/IconSkill/Figma.svg';
import Git from '../../assets/img/IconSkill/Git.svg';
import MongoDB from '../../assets/img/IconSkill/MongoDB.svg';
import NodeJS from '../../assets/img/IconSkill/NodeJS.svg';
import SCSS from '../../assets/img/IconSkill/SCSS.svg';
import TypeScript from '../../assets/img/IconSkill/TypeScript.svg';
import SocketIO from '../../assets/img/IconSkill/SocketIO.svg';
const Skills = () => {
  const [ref, springs]  = useInView(
    () => ({
      
      from: {
        opacity: 0,
        transform:'translateX(-100%)'
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
      rootMargin: '-40% 0px',

    }
  )
  return (
    <div className="container">
      <animated.div className='skills ' ref={ref} style={springs}>
        <div className="skills-content">
          <div className="skills-list">
            <div className="skills-item">
              <ReactSVG src={ReactJS} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={NodeJS} className={'skills-icon'} />
            </div>
            <div className="skills-item">
              <ReactSVG src={MongoDB} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={SocketIO} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={Git} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={Figma} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={SCSS} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={TypeScript} className={'skills-icon'} fill={'red'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={bootstrap} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={ant} className={'skills-icon'}/>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default Skills;