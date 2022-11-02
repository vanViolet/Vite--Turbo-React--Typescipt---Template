import { MantineProvider } from '@mantine/core'
import { useAppSelector } from './Context/_hook'
import NavigationScroll from './Routers/RouterComponent/NavigationScroll'
import { Routes } from './Routers/Routes'

export const App = () => {
  const darkMode = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: darkMode ? 'dark' : 'light',

        black: 'rgba(0,0,0,0.7)',

        fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif`,
        focusRing: 'never',
        other: {
          colors: {
            mainColor: '#27272a',
          },
        },
      }}
    >
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </MantineProvider>
  )
}
