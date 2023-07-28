import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import cartReducer from '../features/cart/cartSlice';
import questionReducer from '../features/questions/questionsSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    question: questionReducer,
  },
});
