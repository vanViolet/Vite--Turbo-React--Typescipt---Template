import { Avatar, Center, Divider, Drawer, Text, useMantineTheme } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { FaGithubSquare } from 'react-icons/fa'
import { MyGrid, MyGridElement } from '../Components/MyGrid'
import { sidebarToggle } from '../Context/customizationReducer'
import { useAppDispatch, useAppSelector } from '../Context/_hook'
import { iconLibrary } from '../Assets/_iconLibrary'
import { cssLibrary } from '../Assets/_cssLibrary'
import { colorLibrary } from '../Assets/_colorLibrary'
import { setDarkMode } from '../Context/darkModeReducer'
import { useState } from 'react'
import { mediaQuery } from '../Utilities/mediaQuery'
import { AppDispatch } from '../Context/_store'

interface IElements {
  GridElement: () => MyGridElement[]
  DrawerGridElement: () => MyGridElement[]
}

export const AppHeader = () => {
  const theme = useMantineTheme()
  const dispatch: AppDispatch = useAppDispatch()
  const burgerToggle = useAppSelector((state) => state.counter.sidebarToggle)
  const darkMode = useAppSelector((state) => state.darkMode.darkMode)
  const [drawer, setDrawer] = useState(false)
  const { hovered: burgerHover, ref: burgerRef } = useHover()
  const { hovered: settingHover, ref: settingRef } = useHover()

  const Elements: IElements = {
    GridElement() {
      return [
        {
          props: { columns: 12, children: '' },
          sx: {
            color: colorLibrary('header-text'),
            backgroundColor: colorLibrary('MAIN_COLOR'),
            backdropFilter: 'blur(10px)',
            height: 50,
            margin: 0,
            borderBottom: '1px solid rgba(0,0,0,0.2)',
            boxShadow: burgerToggle ? '245px 1px 10px rgba(0,0,0,0.3)' : '50px 1px 10px rgba(0,0,0,0.3)',
            ...cssLibrary('Position0000Fixed'),
            ...cssLibrary('Transition'),
          },
          GridCol: [
            {
              colspan: 8,
              sx: {
                ...cssLibrary('FlexItemCenter'),
                justifyContent: '',
                padding: 0,
              },
              Box: [
                {
                  ref: burgerRef,
                  child: iconLibrary('Hamburger', 'HeroSize'),
                  sx: [
                    {
                      backgroundColor: burgerHover ? colorLibrary('hover-header-bg') : '',
                      color: burgerHover ? colorLibrary('hover-header-text') : '',
                      cursor: burgerHover ? 'pointer' : '',
                      width: mediaQuery('mobile') ? (burgerToggle ? '100%' : 50) : burgerToggle ? 250 : 50,
                      height: '100%',
                      ...cssLibrary('Transition'),
                      ...cssLibrary('FlexItemCenter'),
                      zIndex: 10,
                    },
                    mediaQuery('mobile')
                      ? {
                          ...cssLibrary('Position0000Absolute'),
                        }
                      : {},
                  ],
                  onClick() {
                    dispatch(sidebarToggle())
                  },
                },
                {
                  sx: [
                    {
                      cursor: burgerHover ? 'pointer' : '',
                      marginLeft: mediaQuery('mobile') ? 70 : 20,
                      opacity: mediaQuery('mobile') && burgerToggle ? 0 : 1,
                    },
                    {
                      ...cssLibrary('Transition'),
                      ...cssLibrary('FlexItemCenter'),
                    },
                  ],
                  child: (
                    <>
                      <FaGithubSquare size={30} />
                      <Text pl={5}>Hello World</Text>
                    </>
                  ),
                },
              ],
            },
            {
              colspan: 4,
              sx: {
                ...cssLibrary('FlexItemCenter'),
                justifyContent: 'flex-end',
                position: 'relative',
              },
              Switch: [
                {
                  size: 'lg',
                  offLabel: iconLibrary('Sun', 'ButtonSize', colorLibrary('warning')),
                  onLabel: iconLibrary('Moon', 'ButtonSize', colorLibrary('info')),
                  sx: {
                    marginTop: 3,
                    marginRight: 50,
                    ...cssLibrary('FlexItemCenter'),
                    '.mantine-Switch-track': {
                      backgroundColor: theme.colorScheme === 'dark' ? ('rgba(0,0,0,0.2)!important' as const) : 'rgba(0,0,0,0.1)',
                      borderColor: theme.colorScheme === 'dark' ? ('rgba(0,0,0,0.1)!important' as const) : 'rgba(0,0,0,0.1)',
                      '.mantine-Switch-thumb': {
                        backgroundColor: theme.colorScheme === 'dark' ? '#C1C2C5' : 'white',
                        borderColor: theme.colorScheme === 'dark' ? '#C1C2C5' : 'rgba(0,0,0,0.7)',
                      },
                      display: mediaQuery('mobile') ? 'none' : '',
                    },
                  },
                  checked: darkMode,
                  onChange() {
                    dispatch(setDarkMode())
                    if (!darkMode) {
                      localStorage.setItem('darkMode', 'darkMode')
                    } else {
                      localStorage.removeItem('darkMode')
                    }
                  },
                },
              ],
              Box: [
                {
                  ref: settingRef,
                  sx: {
                    ...cssLibrary('Position0000Absolute'),
                    ...cssLibrary('FlexItemCenter'),
                    ...cssLibrary('Transition'),
                    left: '',
                    padding: '10px',
                    backgroundColor: settingHover ? colorLibrary('hover-header-bg') : '',
                    color: settingHover ? colorLibrary('hover-header-text') : '',
                    cursor: settingHover ? 'pointer' : '',
                    opacity: mediaQuery('mobile') && burgerToggle ? 0 : 1,
                  },
                  child: iconLibrary('UserCircle', 'HeroSize'),
                  onClick() {
                    setDrawer(!drawer)
                  },
                },
              ],
            },
          ],
        },
      ]
    },

    DrawerGridElement() {
      return [
        {
          GridCol: [
            {
              colspan: 12,
              Box: [
                {
                  child: (
                    <Center>
                      <Avatar size="lg" color="cyan" radius="xl" sx={{ ...cssLibrary('ShadowSm') }}>
                        MI
                      </Avatar>
                    </Center>
                  ),
                },
                {
                  sx: { paddingTop: 5 },
                  child: (
                    <Center>
                      <Text weight={500}>Muchamad Irvan</Text>
                    </Center>
                  ),
                },
                {
                  child: (
                    <Center>
                      <Text italic>Super User</Text>
                    </Center>
                  ),
                },
                {
                  sx: { padding: 20 },
                  child: <Divider />,
                },
              ],
            },
          ],
        },
      ]
    },
  }

  return (
    <>
      <MyGrid GridArrayObject={Elements.GridElement()} />
      <Drawer
        opened={drawer}
        size="sm"
        onClose={() => setDrawer(false)}
        position="right"
        overlayOpacity={0}
        sx={{
          '.mantine-Paper-root': {
            boxShadow: '-2px 0px 10px rgba(0,0,0,0.3)',
            backgroundColor: colorLibrary('side-bar'),
            backdropFilter: 'blur(25px)',
          },
          '.mantine-Drawer-closeButton': {
            display: 'none',
          },
        }}
      >
        <MyGrid GridArrayObject={Elements.DrawerGridElement()} />
      </Drawer>
    </>
  )
}
