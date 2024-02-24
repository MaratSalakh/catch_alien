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
  },
});

export const { saveTime } = timerSlice.actions;

export default timerSlice.reducer;
