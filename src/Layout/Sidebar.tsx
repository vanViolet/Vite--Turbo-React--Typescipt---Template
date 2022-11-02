import { useMantineTheme } from '@mantine/core'
import React, { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colorLibrary } from '../Assets/_colorLibrary'
import { cssLibrary } from '../Assets/_cssLibrary'
import { INavBar, MyNav } from '../Components/MyNav'
import { useAppDispatch, useAppSelector } from '../Context/_hook'
import { AppDispatch } from '../Context/_store'
import { mediaQuery } from '../Utilities/mediaQuery'
import { MenuItems } from './MenuItems'

const SideBar = () => {
  const theme = useMantineTheme()
  const location = useLocation()
  const burgerToggle = useAppSelector((state) => state.counter.sidebarToggle)
  const { pathname } = location
  const dispatch: AppDispatch = useAppDispatch()

  const NavbarElement: INavBar[] = [
    {
      id: 'sidebar',
      sx: [
        {
          padding: burgerToggle ? '0px 20px' : '0px 0px',
          width: mediaQuery('mobile') ? (burgerToggle ? '100%' : 0) : burgerToggle ? 250 : 50,
          marginTop: 50,
          backgroundColor: colorLibrary('side-bar'),
          backdropFilter: 'blur(20px)',
          borderRight: theme.colorScheme === 'dark' ? '' : '1px solid rgba(0,0,0,0.2)',
          boxShadow: '2px 5px 10px rgba(0,0,0,0.3)',
          ...cssLibrary('Position0000Fixed'),
          ...cssLibrary('Transition'),
        },
        {
          '.mantine-ScrollArea-scrollbar': {
            display: burgerToggle ? '' : 'none',
          },
        },
      ],
      Section: [
        {
          Parent: MenuItems.map((row) => ({
            ParentLabel: row.label,
            dividerProps: { my: burgerToggle ? 10 : 0 },
            sx: {
              transform: burgerToggle ? '' : 'translateX(-100px)',
              ...cssLibrary('Transition'),
            },
            child: row.children.map((r) => ({
              label: r.label,
              icon: r.icon,
              path: r.path,
              component: Link,
              className: 'asdfasdf',
              sx: [
                {
                  marginTop: burgerToggle ? 0 : 0,
                  '&:hover': {
                    '.mantine-NavLink': {
                      '&-label,&-icon': {
                        color: colorLibrary('hover-text'),
                      },
                    },
                    backgroundColor: colorLibrary('hover-bg'),
                  },
                },
                {
                  '.mantine-NavLink': {
                    '&-label,&-icon': {
                      color: r.path === pathname ? colorLibrary('active-text') : '',
                    },
                  },
                  backgroundColor: r.path === pathname ? colorLibrary('active-bg') : '',
                },
              ],
              closeWhenOnClick: mediaQuery('mobile') ? true : false,
            })),
          })),
        },
      ],
    },
  ]

  return <MyNav NavBar={NavbarElement} />
}

export default SideBar as FunctionComponent
