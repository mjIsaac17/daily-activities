import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentActivity: null,
  activityList: null,
  isLoading: false,
  error: ''
};

const activityReducer = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload || '';
    },
    setCurrentActivity: (state, action) => {
      state.currentActivity = action.payload;
    },
    successGetActivities: (state, action) => {
      state.isLoading = false;
      state.activityList = action.payload;
    }
  }
});

export const {
  setLoading,
  setError,
  setCurrentActivity,
  successGetActivities
} = activityReducer.actions;
export default activityReducer.reducer;
