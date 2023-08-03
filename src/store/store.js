import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import cartReducer from '../features/cart/cartSlice';
import questionReducer from '../features/questions/questionSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    question: questionReducer,
  },
});
