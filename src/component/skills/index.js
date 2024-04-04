
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
const Skills = ({
  infoVisible,
  SetInfoVisible
}) => {

  return (
    <div className="container">
      <div className='skills'>
        <div className="skills-content">
          <div className="skills-list">
            <div className="skills-item">
              <ReactSVG src={ReactJS} className={'skills-icon'}/>
                <p>react js</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={NodeJS} className={'skills-icon'} />
            </div>
            <div className="skills-item">
              <ReactSVG src={MongoDB} className={'skills-icon'}/>
            </div>
            <div className="skills-item">
              <ReactSVG src={SocketIO} className={'skills-icon'}/>
              <p>socket.io</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={Git} className={'skills-icon'}/>
              <p>git</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={Figma} className={'skills-icon'}/>
              <p>figma</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={SCSS} className={'skills-icon'}/>
              <p>scss</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={TypeScript} className={'skills-icon'} fill={'red'}/>
              <p>typeScript</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={bootstrap} className={'skills-icon'}/>
              <p>bootstrap</p>
            </div>
            <div className="skills-item">
              <ReactSVG src={ant} className={'skills-icon'}/>
              <p>ant.design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;