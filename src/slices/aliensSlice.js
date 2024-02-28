import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {
    alienGood: {
      textIsHide: false,
      isStopped: false,
      texts: [
        'ХОЧУ ДОМОЙ...',
        'ГОВОРИЛА МНЕ МАМА ДАЛЕКО НЕ УЛЕТАТЬ...',
        'КУДА Я ЛЕЧУ? ЗАЧЕМ? ДЛЯ ЧЕГО?',
        'У ВАС ЕСТЬ МАКАРОНЫ ПО СКИДКЕ?',
        'НА ПОСЛЕДНИЙ АВТОБУС НЕ УСПЕВАЮ...',
      ],
      chosenText: 0,
    },
    alienBad: {
      textIsHide: false,
      isBubbled: false,
      texts: [
        'Я ПРИШЕЛ С МИРОМ! ИЛИ НЕТ...',
        'Я ЗАХВАЧУ ПИЦЦУ!',
        'ААААААААААААА!!!!',
        'ЗА ПЛУТОН!!',
        'УКРАДУ ГАРАЖ!',
      ],
      chosenText: 0,
    },
  },
  ids: ['alienGood', 'alienBad'],
  catchedAliensCounter: 0,
};

const aliensSlice = createSlice({
  name: 'aliens',
  initialState,
  reducers: {
    addCatchedAlien: (state) => {
      if (state.catchedAliensCounter < 11) {
        state.catchedAliensCounter += 1;
      }
    },
    removeCatchedAlien: (state) => {
      if (state.catchedAliensCounter > 0) {
        state.catchedAliensCounter -= 1;
      }
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
    changeChosenTextBad: (state, action) => {
      state.entities.alienBad.chosenText = action.payload;
    },
    changeChosenTextGood: (state, action) => {
      state.entities.alienGood.chosenText = action.payload;
    },
  },
});

export const {
  addCatchedAlien,
  removeCatchedAlien,
  addBubble,
  hideTextGood,
  hideTextBad,
  removeBubble,
  addStop,
  removeStop,
  showTextBad,
  showTextGood,
  changeChosenTextBad,
  changeChosenTextGood,
} = aliensSlice.actions;

export default aliensSlice.reducer;
