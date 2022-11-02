import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './authReducer'
import { counterSlice } from './customizationReducer'
import { darkModeReducer } from './darkModeReducer'

export interface IDispatch {
  type: string
}

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer.reducer,
    darkMode: darkModeReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
