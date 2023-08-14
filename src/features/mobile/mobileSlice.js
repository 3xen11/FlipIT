import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false,
};

const mobileSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile, isMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
