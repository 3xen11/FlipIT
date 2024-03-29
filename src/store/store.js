import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import cartReducer from '../features/cart/cartSlice';
import signinReducer from '../features/signin/signinSlice';
import questionReducer from '../features/questions/questionSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    question: questionReducer,
    signin: signinReducer,
  },
});
