import classNames from 'classnames';
import {Link, useLocation} from 'react-router-dom';
import UseActionPage from '../../redux/Slice/Page/ActionPage';

import './nav.scss';
const Nav = ()=>{
  const {setPageNumberFunc} = UseActionPage();
  const location = useLocation();

  return(
    <div className="navigate">
        <Link to={'/aboutme'} id={'2'} className={classNames("navigate-item", {"navigate-item-active":location.pathname.split('/')[1] === "aboutme"})} onClick={setPageNumberFunc}>About</Link>
        <Link to={'/skills'} id={'3'} className={classNames("navigate-item", {"navigate-item-active":location.pathname.split('/')[1] === 'skills'})} onClick={setPageNumberFunc}>Skill</Link>
        <Link to={'/portfolio'} id={'4'} className={classNames("navigate-item", {"navigate-item-active":location.pathname.split('/')[1] === 'portfolio'})} onClick={setPageNumberFunc}>Portfolio</Link>
        <Link to={'/contact'} id={'5'} className={classNames("navigate-item", {"navigate-item-active":location.pathname.split('/')[1] === 'contact'})} onClick={setPageNumberFunc}>Contact</Link>
    </div>
  )
}


export default Nav;