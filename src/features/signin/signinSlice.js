import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: true,
};

const signinSlice = createSlice({
  name: 'signin',
  initialState,

  reducers: {
    changeOption: (state) => {
      state.login = !state.login;
    },
  },
});

export const { login, changeOption } = signinSlice.actions;

export default signinSlice.reducer;
