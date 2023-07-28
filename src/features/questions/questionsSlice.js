import { createSlice } from '@reduxjs/toolkit';
import TechQuestionsAnswersData from '@/data/TechQuestionsAnswersData';

const initialState = {
  data: TechQuestionsAnswersData,
  randomNumber: 0,
  chosenTechnology: 'JavaScript',
};

const questionSlice = createSlice({
  name: 'question',
  initialState,

  reducers: {
    getRandomNumber: (state) => {
      // Data trzeba zmienić jakoś na to co jest w AppFlashCard.js żeby dobrać odpowiednią długość tablicy
      // const number = Math.floor(Math.random() * state.data.length);
      const number = Math.floor(Math.random() * 10);
      state.randomNumber = number;
    },
    changeTechnology: (state, action) => {
      state.chosenTechnology = action.payload;
    },
  },
});

export const {
  data,
  randomNumber,
  getRandomNumber,
  chosenTechnology,
  changeTechnology,
} = questionSlice.actions;

export default questionSlice.reducer;
