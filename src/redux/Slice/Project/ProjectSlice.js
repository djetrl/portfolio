import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  item:[],
  status:'normal'
}
export const projectSlice = createSlice({
  name:'project',
  initialState,
  reducers:{
    setProject:  (state, action)=>{
        state.item = [...action.payload]
    },
    setProjectStatus:  (state, action)=>{
      state.status = action.payload;
  }
  }
})

export const  {setProject} = projectSlice.actions;
export default projectSlice.reducer;



