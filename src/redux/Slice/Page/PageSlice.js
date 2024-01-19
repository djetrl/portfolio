import {createSlice} from '@reduxjs/toolkit';
const pageNumber=()=>{
  switch(window.location.pathname){
    case '/': return 1;
    case '/aboutme': return 2;
    case '/skills': return 3;
    case '/portfolio': return 4;
    case '/contact': return 5;
    default: return 1;
  }
}
const initialState = {
  count: pageNumber()
}
export const pageSlice = createSlice({
  name:'page',
  initialState,
  reducers:{
    setNumberPage: (state, action)=>{
      state.count = action.payload
    }
  }
})

export const  {setNumberPage} = pageSlice.actions;
export default pageSlice.reducer;