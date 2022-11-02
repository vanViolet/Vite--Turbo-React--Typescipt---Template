import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'

import { store } from './Context/_store'
import { MantineTheme } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export interface IMyOtherTheme extends MantineTheme {
  other: IOtherTheme
}

interface IOtherTheme {
  colors: IColors
}

interface IColors {
  mainColor: string
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
