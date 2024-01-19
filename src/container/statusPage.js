
import {connect} from 'react-redux';
import UseActionPage from '../redux/Slice/Page/ActionPage';
import { StatusPage as BaseStatusPage } from "../component";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const StatusPage = ({pageNumber})=>{
const {setPageNumberFuncNumber} =UseActionPage();
const navigate = useNavigate();

const navigateFunc = (event)=>{
  if ( ["ArrowUp", "ArrowDown"].includes(event.key) ) {
    if( pageNumber > 1 && pageNumber < 5 ){
      if(event.key === 'ArrowDown'){
        setPageNumberFuncNumber(+pageNumber++)
      }else{
        setPageNumberFuncNumber(+pageNumber--)
      }
    }else if(pageNumber === 1 && event.key === 'ArrowDown'){
      setPageNumberFuncNumber(+pageNumber++)
    }else if(pageNumber === 5 && event.key === 'ArrowUp'){
      setPageNumberFuncNumber(+pageNumber--)
    }



  switch(pageNumber){
      case 1: navigate('/'); break;
      case 2: navigate('/aboutme'); break;
      case 3: navigate('/skills'); break;
      case 4: navigate('/portfolio'); break;
      case 5: navigate('/contact'); break;
      default: return null;
  }

}
}
useEffect(()=>{
    window.addEventListener('keydown', (event)=>navigateFunc(event))
    return(window.removeEventListener('keydown', (event)=>navigateFunc(event)))
},[])
  return(
    <BaseStatusPage pageNumber={pageNumber} setPageNumberFunc={setPageNumberFuncNumber}  />
  )
}


export default connect(({ page })=>({pageNumber:page.count}))(StatusPage); 