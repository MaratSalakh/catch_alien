import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {
    alienGood: { textIsHide: false, isStopped: false },
    alienBad: { textIsHide: false, isBubbled: false },
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
      state.entities.alienBad.isBubbled = true;
    },
    removeBubble: (state) => {
      state.entities.alienBad.isBubbled = false;
    },
    addStop: (state) => {
      state.entities.alienGood.isStopped = true;
    },
    removeStop: (state) => {
      state.entities.alienGood.isStopped = false;
    },
    hideTextGood: (state) => {
      state.entities.alienGood.textIsHide = true;
    },
    hideTextBad: (state) => {
      state.entities.alienBad.textIsHide = true;
    },
    showTextGood: (state) => {
      state.entities.alienGood.textIsHide = false;
    },
    showTextBad: (state) => {
      state.entities.alienBad.textIsHide = false;
    },
  },
});

export const {
  addCatchedAlien,
  addBubble,
  hideTextGood,
  hideTextBad,
  removeBubble,
  addStop,
  removeStop,
  showTextBad,
  showTextGood,
} = aliensSlice.actions;

export default aliensSlice.reducer;
