'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: [],
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
    },
    deleteScore: (state, action) => {
      state.scores = state.scores.filter(score => score.id !== action.payload.id);
    },
  },
});

export const { addScore, deleteScore } = scoresSlice.actions;
export const selectAllScores = (state) => state.scores.scores;
export const selectUserScores = (userId) => (state) =>
  state.scores.scores.filter((score) => score.userId === userId);
export const selectGameScores = (gameName) => (state) =>
  state.scores.scores.filter((score) => score.game === gameName);

export default scoresSlice.reducer;