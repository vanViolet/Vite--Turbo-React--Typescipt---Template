// Define a type for the slice state

import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  darkMode: boolean
}

export const darkModeControl = () => {
  if (localStorage.getItem('darkMode')) return true
  else return false
}

const initialState: IInitialState = {
  darkMode: darkModeControl(),
}

export const darkModeReducer = createSlice({
  name: 'darkMode',

  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { setDarkMode } = darkModeReducer.actions

export default darkModeReducer.reducer
