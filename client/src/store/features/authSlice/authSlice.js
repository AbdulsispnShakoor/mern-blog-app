import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state,action) => {
      state.currentUser = action.payload
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = authSlice.actions

export default authSlice.reducer