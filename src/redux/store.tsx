import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
import locationSlice from './locationSlice';

export const store = configureStore({
  reducer: {
    characters:characterSlice,
    locations:locationSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store