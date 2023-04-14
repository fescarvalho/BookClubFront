import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (action, state) => {
      state.user = action.payload.user;
    },
    setToken: (action, state) => {
      state.token = action.payload.token;
    },
    setAll: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    }
  }
});

export const { setUser, setToken, setAll } = userSlice.actions;

export default userSlice.reducer;
