import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './_store'

export interface CounterState {
  sidebarToggle: boolean
  loadingOverlay: boolean
  openStack: any
  modalIsOpen: boolean
}

const initialState: CounterState = {
  sidebarToggle: true,
  loadingOverlay: false,
  openStack: [],
  modalIsOpen: false,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle
    },

    loadingOverlay: (state, action: PayloadAction<boolean>) => {
      state.loadingOverlay = action.payload
    },

    openStack: (state, action: PayloadAction<JSX.Element | JSX.Element[] | undefined>) => {
      state.openStack.push(action.payload)
    },
    closeStack: (state) => {
      state.openStack.pop()
    },
    modalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload
    },
  },
})

export const { sidebarToggle, loadingOverlay, openStack, closeStack, modalIsOpen } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.sidebarToggle

export default counterSlice.reducer
