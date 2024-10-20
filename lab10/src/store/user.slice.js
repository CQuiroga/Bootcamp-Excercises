import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      sessionStorage.setItem('token', state.token); // Guarda el token en sessionStorage
    },
    logout: (state) => {
      state.email = '';
      state.token = '';
      sessionStorage.removeItem('token');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;