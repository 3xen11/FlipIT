import { createSlice } from '@reduxjs/toolkit';
import { BsPlusCircle } from 'react-icons/bs';

const initialState = {
  id: 'standard1',
  button: null,
  cartItems: {},
  total: 0,
  buttons: {
    basic: [
      {
        id: 'basic1',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
    ],
    standard: [
      {
        id: 'standard1',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
      {
        id: 'standard2',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
    ],
    premium: [
      {
        id: 'premium1',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
      {
        id: 'premium2',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
      {
        id: 'premium3',
        icon: <BsPlusCircle className="h-8 w-8" />,
        newIcon: null,
      },
    ],
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    changeIcon: (state, action) => {
      const { buttonId, newIcon } = action.payload;
      state.id = buttonId;

      const group = buttonId.slice(0, -1);
      const buttonToUpdate = state.buttons[group].find(
        (button) => button.id === buttonId
      );
      if (buttonToUpdate) {
        buttonToUpdate.newIcon = state.button;
      }

      state.button = newIcon;
    },

    getIcon: (state, action) => {
      state.button = action.payload;
    },

    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { changeIcon, buttons, button, getIcon, getId, id } =
  cartSlice.actions;

export default cartSlice.reducer;
