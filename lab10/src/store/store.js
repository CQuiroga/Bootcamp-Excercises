import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { scoreApi } from "lab10/store/services/scores.api";
import userSlice from 'lab10/store/user.slice';
import scoresSlice from 'lab10/store/score.slice';



export const store = configureStore({
  reducer: {
    user: userSlice,
    scores: scoresSlice,
    [scoreApi.reducerPath]: scoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoreApi.middleware),
});

setupListeners(store.dispatch);