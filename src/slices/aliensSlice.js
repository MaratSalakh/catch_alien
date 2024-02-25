import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {
    alienGood: { textIsHide: false, isClickable: true },
    alienBad: { textIsHide: false, isClickable: true },
  },
  ids: ['alienGood', 'alienBad'],
  catchedAliensCounter: 0,
};

const aliensSlice = createSlice({
  name: 'aliens',
  initialState,
  reducers: {
    addCatchedAlien: (state) => {
      state.catchedAliensCounter += 1;
    },
    addBubble: (state) => {
      state.entities.alienGood.isClickable = false;
    },
    hideTextGood: (state) => {
      state.entities.alienGood.textIsHide = true;
    },
    hideTextBad: (state) => {
      state.entities.alienBad.textIsHide = true;
    },
  },
});

export const { addCatchedAlien, addBubble, hideTextGood, hideTextBad } =
  aliensSlice.actions;

export default aliensSlice.reducer;
