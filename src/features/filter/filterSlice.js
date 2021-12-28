import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  pattern: '.',
};
/*
export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'filter/set': {
      let newPattern = action.payload;
      if (newPattern === '*') {
        newPattern = '.';
      }
      return { pattern: newPattern };
    }
    default:
      return state;
  }
}*/


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    set(state, action) {
      let newPattern = action.payload;
      if (newPattern === '*') {
        newPattern = '.';
      }
      return { pattern: newPattern };
    }
  }
});


export const { set } = filterSlice.actions;

export default filterSlice.reducer;
