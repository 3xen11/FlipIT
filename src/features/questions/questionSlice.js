import { createSlice } from '@reduxjs/toolkit';
import QuestionsData from '@/data/QuestionsData';

const initialState = {
  maxIndex: 10, // chwilowo
  index: 0,
  questions: QuestionsData,
  technology: 'JavaScript',
  technologyArray: QuestionsData,
  questionId: null,
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

      const questionIdToMarkAsKnown = state.questionId;
      const filteredTechArray = state.technologyArray.filter(
        (tech) => tech.id !== questionIdToMarkAsKnown
      );

      state.technologyArray = filteredTechArray;
      state.maxIndex = filteredTechArray.length;
      const updatedQuestions = state.questions.map((question) =>
        question.id === questionIdToMarkAsKnown
          ? { ...question, known: true }
          : question
      );
      state.questions = updatedQuestions;
    },

    getQuestionId: (state, action) => {
      state.questionId = action.payload;
    },

    resetCategory: (state) => {
      state.questions = QuestionsData;
    },
  },
});

export const {
  getQuestionId,
  markAsKnown,
  getRandomIndex,
  index,
  getTechnologyArray,
  technologyArray,
  knownQuestions,
} = questionSlice.actions;

export default questionSlice.reducer;
