import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 'standard1',
  button: null,
  cartItems: [],
  total: 0,
  cartPosition: 0,
  buttons: {
    basic: [
      {
        id: 'basic1',
        icon: 'BsPlusCircle',
        newIcon: null,
      },
    ],
    standard: [
      {
        id: 'standard1',
        icon: 'BsPlusCircle',
        newIcon: null,
      },
      {
        id: 'standard2',
        icon: 'BsPlusCircle',
        newIcon: null,
      },
    ],
    premium: [
      {
        id: 'premium1',
        icon: 'BsPlusCircle',
        newIcon: null,
      },
      {
        id: 'premium2',
        icon: 'BsPlusCircle',
        newIcon: null,
      },
      {
        id: 'premium3',
        icon: 'BsPlusCircle',
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
    addToCart: (state, action) => {
      const groupId = action.payload;
      if (groupId === 'basic') {
        if (state.buttons.basic[0].newIcon !== null) {
          const newItem = {
            title: 'Pakiet BASIC:',
            icons: [state.button],
            cost: 20,
          };

          state.cartItems = [...state.cartItems, newItem];
        } else return;
      }
      state.buttons.basic[0].newIcon = null;
      state.button = null;
    },
  },
});

export const {
  changeIcon,
  buttons,
  button,
  getIcon,
  getId,
  id,
  cartItems,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
