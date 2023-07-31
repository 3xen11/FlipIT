import { createSlice } from '@reduxjs/toolkit';
import TechQuestionsAnswersData from '@/data/TechQuestionsAnswersData';

const initialState = {
  data: TechQuestionsAnswersData,
  chosenTechnologyArrayLength: 10,
  randomNumber: 0,
  chosenTechnology: 'JavaScript',
  chosenTechnologyArray: [
    {
      tech: 'TypeScript',
      question: 'Jak działa "union type" w TypeScript?',
      answer:
        'Typy union pozwalają na określenie, że zmienna może mieć jeden z kilku różnych typów. Definiujemy je za pomocą znaku "|". Na przykład: let value: string | number;',
    },
  ],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,

  reducers: {
    getRandomNumber: (state) => {
      const number = Math.floor(
        Math.random() * state.chosenTechnologyArrayLength
      );
      state.randomNumber = number;
    },
    changeTechnology: (state, action) => {
      state.chosenTechnology = action.payload;
    },

    choseTechnology: (state) => {
      state.chosenTechnologyArray = state.data.filter(
        (technology) => state.chosenTechnology === technology.tech
      );
      state.chosenTechnologyArrayLength = state.chosenTechnologyArray.length;
    },
  },
});

export const {
  chosenTechnologyArrayLength,
  chosenTechnologyArray,
  data,
  randomNumber,
  getRandomNumber,
  chosenTechnology,
  choseTechnology,
  changeTechnology,
} = questionSlice.actions;

export default questionSlice.reducer;
