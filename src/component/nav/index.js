import classNames from 'classnames';
import { Link } from 'react-scroll';
import UseActionPage from '../../redux/Slice/Page/ActionPage';

import './nav.scss';
import { useEffect, useState } from 'react';
const Nav = ()=>{
  const [unlockHeader,  setUnlockHeader] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if( window.scrollY > 200){
        setUnlockHeader(true)
      }else{
        setUnlockHeader(false)
      }
    })


    return ()=> window.removeEventListener('scroll', ()=>{
      if( window.scrollY >= 100){
        setUnlockHeader(true)
      }else{
        setUnlockHeader(false)
      }
    })
  },[])
  return(
    <div className="container">
        <div className={classNames("header  wow fadeInDown", {"header-unlock": unlockHeader})}>
        <h1>ALEKSIE</h1>
        <div className="navigate">
            <Link to={'#aboutme'} smooth={true} duration={700} className="navigate-item textWithUnderline">About</Link>
            <Link to={'#skills'} smooth={true} duration={700} className="navigate-item textWithUnderline">Skill</Link>
            <Link to={'#portfolio'} smooth={true} duration={700}  className="navigate-item textWithUnderline">Portfolio</Link>
            <Link to={'#contact'} smooth={true} duration={700} className="navigate-item textWithUnderline">Contact</Link>
        </div>
      </div>
    </div>
  )
}


export default Nav;