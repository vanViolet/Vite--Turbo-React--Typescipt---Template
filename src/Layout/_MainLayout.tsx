import { Box, LoadingOverlay, Transition, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { WaveLottie } from '../Assets/Lottie/WaveLottie'
import { cssLibrary } from '../Assets/_cssLibrary'
import { useAppSelector } from '../Context/_hook'
import { AppHeader } from './Header'
import SideBar from './Sidebar'

export const MainLayout = () => {
  const theme = useMantineTheme()
  const user = useAppSelector((state) => state.auth.auth)
  const modal = useAppSelector((state) => state.counter.openStack)
  const modalIsOpen = useAppSelector((state) => state.counter.modalIsOpen)
  if (!user) {
    return <Navigate to="/login" />
  }
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)
  const loadingOverlay = useAppSelector((state) => state.counter.loadingOverlay)

  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Box id="Main--Layout">
      <WaveLottie style={{ position: 'fixed', top: -210, left: 0, marginLeft: -220 }} />
      <WaveLottie style={{ position: 'fixed', top: -220, right: 0, marginRight: -200 }} />
      <Box
        sx={{
          ...cssLibrary('Position0000Fixed'),
          backgroundColor: theme.colorScheme === 'dark' ? 'rgba(26,27,30,0.8)' : 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(25px)',
        }}
      ></Box>
      <Transition mounted={loadingOverlay} transition="fade">
        {(styles) => (
          <LoadingOverlay
            transitionDuration={300}
            style={{ ...styles }}
            loaderProps={{ size: 'lg', color: 'blue', variant: 'bars' }}
            overlayOpacity={0.5}
            overlayColor="rgb(0,0,0)"
            overlayBlur={2}
            visible={toggle}
          />
        )}
      </Transition>

      <Box
        sx={{
          marginTop: 65,
          marginRight: 20,
          marginLeft: toggle ? 270 : mobile ? 20 : 70,
          transitionDuration: '300ms',
          ...cssLibrary('Position0000Absolute'),
        }}
      >
        <Outlet />
      </Box>

      <AppHeader />
      <SideBar />

      {modal.map((row: any, key: number) => {
        return (
          <Transition key={key} mounted={modalIsOpen} transition="fade" duration={500}>
            {() => <Box className="">{row}</Box>}
          </Transition>
        )
      })}
    </Box>
  )
}
