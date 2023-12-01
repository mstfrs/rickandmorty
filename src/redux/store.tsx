import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'

export const store = configureStore({
  reducer: {
    characters:characterSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store