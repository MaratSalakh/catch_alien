import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const catchedAliensSlice = createSlice({
  name: 'catchedAliens',
  initialState,
  reducers: {
    addAlien: (state) => {
      state.value += 1;
    },
  },
});

export const { addAlien } = catchedAliensSlice.actions;

export default catchedAliensSlice.reducer;
