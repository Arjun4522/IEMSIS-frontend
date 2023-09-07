import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: [
    {
      username: '',
      password: '',
      isLoggedIn: false,
    },
  ],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action) {
      const login = {
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: true,
      };
      state.login.push(login);
    },
  },
});

export default loginSlice.reducer;
export const { setUsername } = loginSlice.actions;
