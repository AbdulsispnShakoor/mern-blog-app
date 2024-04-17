import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSliceReducer from './features/authSlice/authSlice';
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage';


// root Reducers for multiple reducers
const rootReducer = combineReducers({
  auth: authSliceReducer,
});

// persist configration config

const persistConfig = {
  key:"root",
  storage,
  version:1
}
// persist Reducers 
const persisteReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer:persisteReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck:false })
  
})

export const persister = persistStore(store)