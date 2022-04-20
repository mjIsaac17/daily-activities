import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'info',
  title: 'Title',
  message: 'Message',
  isOpen: false
};

const snackbarReducer = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    updateSnackbar: (state, action) => {
      state.type = action.payload.type || state.type;
      state.title = action.payload.title || state.title;
      state.message = action.payload.message || state.message;
      state.isOpen = action.payload.isOpen || false;
    }
  }
});

export const { updateSnackbar } = snackbarReducer.actions;
export default snackbarReducer.reducer;
