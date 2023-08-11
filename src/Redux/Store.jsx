import { configureStore } from '@reduxjs/toolkit'
import eduglobal from './Features'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: "root",
  version: 1,
  storage
}
export const Store = configureStore({
  reducer: persistedReducer,
})
const reducer = combineReducers({
  Commerce: eduglobal,
})
const persistedReducer = persistReducer(persistConfig, reducer)

