import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice.js';
import aliensReducer from './aliensSlice.js';

export default configureStore({
  reducer: {
    timer: timerReducer,
    aliens: aliensReducer,
  },
});
