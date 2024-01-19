import { useDispatch } from 'react-redux';
import { setNumberPage } from './PageSlice';
const UseActionPage = () => {
  const dispatch = useDispatch();
  const setPageNumberFunc = (e) => {
    dispatch(setNumberPage(e.target.id))
  }
  const setPageNumberFuncNumber = (num) => {
    dispatch(setNumberPage(num))
  }
  return({setPageNumberFunc, setPageNumberFuncNumber})
}

export default UseActionPage;