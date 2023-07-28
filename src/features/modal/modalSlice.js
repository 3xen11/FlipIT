import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAvailableTechModal: false,
  showDescriptionTechModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    openAvailableTechModal: (state) => {
      state.showAvailableTechModal = true;
    },
    openDescriptionTechModal: (state) => {
      state.showDescriptionTechModal = true;
    },

    closeModal: (state) => {
      state.showDescriptionTechModal = false;
      state.showAvailableTechModal = false;
    },
  },
});

export const { openAvailableTechModal, openDescriptionTechModal, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
