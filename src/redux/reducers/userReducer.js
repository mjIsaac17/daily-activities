import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: ''
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.currentUser = action.payload;
    }
  }
});

export const { setLoading, setError, loginSuccess } = userReducer.actions;
export default userReducer.reducer;
