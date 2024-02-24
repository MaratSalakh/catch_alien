import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice.js';
import catchedAliensReducer from './catchedAliensSlice.js';

export default configureStore({
  reducer: {
    timer: timerReducer,
    catchedAliens: catchedAliensReducer,
  },
});
