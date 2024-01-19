import { useDispatch } from 'react-redux';
import { projectSlice } from './ProjectSlice';
import axios from 'axios';
const UseActionProject = () => {
  const dispatch = useDispatch();
  const setItemProject =  (data) => {
    axios.get(`${window.location.origin}/Project`)
    .then(({data})=>{
      dispatch(projectSlice.actions.setProject(data))
      dispatch(projectSlice.actions.setProjectStatus('normal'))
    })
    .catch((err)=>{
      dispatch(projectSlice.actions.setProjectStatus('error'))
    })
  }
  return({setItemProject})
}

export default UseActionProject;