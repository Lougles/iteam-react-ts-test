import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slice/gameSlice'
// import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
  reducer: {
    games: gameSlice,
  },

})

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector