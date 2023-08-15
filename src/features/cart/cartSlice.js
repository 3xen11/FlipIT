import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  id: 'standard1',
  button: null,
  cartItems: [],
  cartItemsLength: 0,
  total: 0,
  cartPosition: 0,
  totalCost: 0,
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
      //  BASIC
      if (groupId === 'basic') {
        if (state.buttons.basic[0].newIcon !== null) {
          const newItem = {
            id: nanoid(),
            title: 'Pakiet BASIC:',
            icons: [state.buttons.basic[0].newIcon],
            cost: 20,
          };

          state.cartItems = [...state.cartItems, newItem];
          state.buttons.basic[0].newIcon = null;
        } else return;
      }

      // STANDARD
      if (groupId === 'standard') {
        if (
          state.buttons.standard[0].newIcon !== null &&
          state.buttons.standard[1].newIcon !== null
        ) {
          const newItem = {
            id: nanoid(),
            title: 'Pakiet STANDARD:',
            icons: [
              state.buttons.standard[0].newIcon,
              state.buttons.standard[1].newIcon,
            ],
            cost: 35,
          };

          state.cartItems = [...state.cartItems, newItem];
          state.buttons.standard[0].newIcon = null;
          state.buttons.standard[1].newIcon = null;
        } else return;
      }
      // PREMIUM
      if (groupId === 'premium') {
        if (
          state.buttons.premium[0].newIcon !== null &&
          state.buttons.premium[1].newIcon !== null &&
          state.buttons.premium[2].newIcon !== null
        ) {
          const newItem = {
            id: nanoid(),
            title: 'Pakiet PREMIUM:',
            icons: [
              state.buttons.premium[0].newIcon,
              state.buttons.premium[1].newIcon,
              state.buttons.premium[2].newIcon,
            ],
            cost: 50,
          };

          state.cartItems = [...state.cartItems, newItem];
          state.buttons.premium[0].newIcon = null;
          state.buttons.premium[1].newIcon = null;
          state.buttons.premium[2].newIcon = null;
        } else return;
      }

      state.button = null;
      state.cartItemsLength = state.cartItems.length;
    },

    getTotalCost: (state) => {
      state.totalCost = state.cartItems.reduce(
        (total, item) => total + item.cost,
        0
      );
    },

    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItemsLength = state.cartItems.length;
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
  totalCost,
  getTotalCost,
  removeCartItem,
  cartItemsLength,
} = cartSlice.actions;

export default cartSlice.reducer;
