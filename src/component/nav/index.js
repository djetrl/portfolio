import classNames from 'classnames';
import {Link, useLocation} from 'react-router-dom';
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
    <div className={classNames("header", {"header-unlock": unlockHeader})}>
      <h1>ALEKSIE</h1>
      <div className="navigate">
          <Link to={'/aboutme'} className="navigate-item textWithUnderline">About</Link>
          <Link to={'/skills'} className="navigate-item textWithUnderline">Skill</Link>
          <Link to={'/portfolio'}  className="navigate-item textWithUnderline">Portfolio</Link>
          <Link to={'/contact'} className="navigate-item textWithUnderline">Contact</Link>
      </div>
    </div>
  )
}


export default Nav;