import { createSlice } from '@reduxjs/toolkit';
import QuestionsData from '@/data/QuestionsData';

const initialState = {
  maxIndex: 10, // chwilowo
  index: 0,
  questions: QuestionsData,
  technology: 'JavaScript',
  technologyArray: QuestionsData, // tutaj wepchnąć jakoś przefiltrowaną tablicę z pytaniami z JS'a
};

const questionSlice = createSlice({
  name: 'question',
  initialState,

  reducers: {
    getRandomIndex: (state) => {
      state.index = Math.floor(Math.random() * state.maxIndex);
    },

    getTechnologyArray: (state, action) => {
      state.technologyArray = state.questions.filter(
        (tech) => action.payload === tech.tech && tech.known === false
      );
      state.maxIndex = state.technologyArray.length;
      state.technology = action.payload;
      state.index = 0;
    },

    markAsKnown: (state) => {
      if (state.maxIndex === 0) return;
      state.technologyArray = state.questions.filter(
        (tech) => state.technology === tech.tech && tech.known === false
      );

      // to można uprościć
      const newTechArray = state.technologyArray.map((tech, idx) => {
        return idx === state.index
          ? {
              ...tech,
              known: true,
            }
          : tech;
      });

      state.maxIndex = newTechArray.filter((tech) => !tech.known).length;
      state.technologyArray[state.index].known = true;
    },

    resetCategory: (state) => {
      state.questions = QuestionsData;
    },
  },
});

export const {
  markAsKnown,
  getRandomIndex,
  index,
  getTechnologyArray,
  technologyArray,
} = questionSlice.actions;

export default questionSlice.reducer;
