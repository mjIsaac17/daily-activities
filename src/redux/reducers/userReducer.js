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
    },
    logout: (state) => {
      state.currentUser = initialState.currentUser;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    }
  }
});

export const { setLoading, setError, loginSuccess, logout } =
  userReducer.actions;
export default userReducer.reducer;
