import classNames from 'classnames';
import { Link } from 'react-scroll';
import UseActionPage from '../../redux/Slice/Page/ActionPage';
import { animated, useSpring } from 'react-spring';
import './nav.scss';
import { useEffect, useState } from 'react';
const Nav = ()=>{

  const [unlockHeader,  setUnlockHeader] = useState(false);
  const [showBurgerMenu,  setShowBurgerMenu] = useState(false);
  const [widthNav,  setWidthNav] = useState(0);




  useEffect(()=>{
    setWidthNav(document.querySelector('.welcomePage-container').clientWidth)

    window.addEventListener('resize', ()=>{
      if(widthNav != document.querySelector('.welcomePage-container').clientWidth ){
        setWidthNav(document.querySelector('.welcomePage-container').clientWidth)
      }
    })
    window.addEventListener('scroll', ()=>{
      setShowBurgerMenu(false)
      if(window.scrollY > 200){
        setUnlockHeader(true)

      }else{
        setUnlockHeader(false)
      }
    })


    return ()=> window.removeEventListener('scroll', ()=>{
      setShowBurgerMenu(false)
      if( window.scrollY >= 100){
        setUnlockHeader(true)
      }else{
        setUnlockHeader(false)
      }
    })
  },[])

  const onToogleBurgerMenu = ()=>{
    setShowBurgerMenu(!showBurgerMenu)
  }
  const confAnimateBurgerMenu = useSpring({
    from:{
      display:'none',
    },
    to: {
      transform:'translateX(0)',
      opacity: 1,
      display:'flex',
    },
    config:{
      tension: 80, 
      friction: 40,
    }
  })
  return(
    <>
      <div  className="container">
        <div className={classNames("header", {"header-unlock": unlockHeader})} style={{width:`${widthNav > 0 ? `${widthNav}px` : 'auto'}`}}>
        <h1>ALEKSIE</h1>
        <div className="navigate">
            <Link to={'#aboutme'} smooth={true} duration={700} className="navigate-item textWithUnderline">About</Link>
            <Link to={'#skills'} smooth={true} duration={700} className="navigate-item textWithUnderline">Skill</Link>
            <Link to={'#portfolio'} smooth={true} duration={700}  className="navigate-item textWithUnderline">Portfolio</Link>
            <Link to={'#contact'} smooth={true} duration={700} className="navigate-item textWithUnderline">Contact</Link>
        </div>
        <div className='burger__menu--container' onClick={onToogleBurgerMenu}>
          <span className={`burger__menu ${showBurgerMenu ? 'burger__menu-active': '' }`}> </span>
        </div>
      </div>
    </div >
    <div className={`navigate navigate--burger__menu ${showBurgerMenu ? 'navigate--burger__menu-active':'' }`}>
          <div className='burger__menu_clone' onClick={onToogleBurgerMenu}>
            
          </div>
          <div className='navigate_list'>
            <Link to={'#aboutme'} smooth={true} duration={700} className="navigate-item textWithUnderline">About</Link>
            <Link to={'#skills'} smooth={true} duration={700} className="navigate-item textWithUnderline">Skill</Link>
            <Link to={'#portfolio'} smooth={true} duration={700}  className="navigate-item textWithUnderline">Portfolio</Link>
            <Link to={'#contact'} smooth={true} duration={700} className="navigate-item textWithUnderline">Contact</Link>
          </div>
    </div>
    </>
  )
}


export default Nav;