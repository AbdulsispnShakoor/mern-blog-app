import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './features/authSlice/authSlice'
export const store = configureStore({
  reducer: {
    auth: authSliceReducer
  },
})