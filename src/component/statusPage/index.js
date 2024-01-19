import classNames from 'classnames';
import {Link,useLocation} from 'react-router-dom';
import './statusPage.scss';

const StatusPage = ({pageNumber , setPageNumberFunc})=>{
  const location = useLocation();
  return(
    <div className="status-page">
        <ul className="status-page-number">
           <Link to='/'> <li id={"1"} className={classNames({"active-item":location.pathname.split('/')[1] === ""})} onClick={()=>setPageNumberFunc(1)}></li></Link>
           <Link to='/aboutme'> <li id={"2"} className={classNames({"active-item":location.pathname.split('/')[1] === "aboutme"})} onClick={()=>setPageNumberFunc(2)}></li></Link>
           <Link to='/skills'> <li id={"3"} className={classNames({"active-item":location.pathname.split('/')[1] === 'skills'})} onClick={()=>setPageNumberFunc(3)}></li></Link>
           <Link to='/portfolio'> <li id={"4"} className={classNames({"active-item":location.pathname.split('/')[1] === 'portfolio'})} onClick={()=>setPageNumberFunc(4)}></li></Link>
           <Link to='/contact'> <li id={"5"} className={classNames({"active-item":location.pathname.split('/')[1] === 'contact'})} onClick={()=>setPageNumberFunc(5)}></li></Link>
        </ul>
        <p className={classNames("status-page-scroll",{
          "top-scroll":pageNumber >= 2,
          "bottom-scroll":pageNumber <= 4,
        })}>scroll</p>  
    </div>
  )
}


export default StatusPage;