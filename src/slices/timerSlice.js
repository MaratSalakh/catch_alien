import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    saveTime: (state, action) => {
      state.value += action.payload;
    },
    refreshTime: (state) => {
      state.value = 0;
    },
  },
});

export const { saveTime, refreshTime } = timerSlice.actions;

export default timerSlice.reducer;
