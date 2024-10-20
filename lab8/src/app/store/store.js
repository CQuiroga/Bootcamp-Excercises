import { configureStore } from '@reduxjs/toolkit';
import { operationsSlice } from './features/operations.slice';

export const store = configureStore({
  reducer: {
    operations: operationsSlice.reducer
  }
});