import {  configureStore } from '@reduxjs/toolkit'
import { basketSlice } from './basket/basketSlice';
import { likeSlice } from './like/likeSlice';


export const store = configureStore({
  reducer: {
    basket:basketSlice.reducer ,
    like:likeSlice.reducer 
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store