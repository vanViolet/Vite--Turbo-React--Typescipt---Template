import { Box, Divider, DividerProps, Navbar, NavbarProps, NavLink, ScrollArea } from '@mantine/core'
import { SectionProps } from '@mantine/core/lib/AppShell/HorizontalSection/Section/Section'
import { To } from 'react-router-dom'
import { sidebarToggle } from '../Context/customizationReducer'
import { useAppDispatch } from '../Context/_hook'
import { AppDispatch } from '../Context/_store'
import { CommonTypes } from '../Types/CommonTypes'

interface IRoot {
  NavBar: INavBar[]
}

export interface INavBar extends Omit<CommonTypes, 'style'> {
  props?: NavbarProps
  Section: ISection[]
}

interface ISection extends Omit<CommonTypes, 'style' | 'className'> {
  props?: SectionProps
  Parent?: IParent[]
}

interface IParent extends Omit<CommonTypes, 'style'> {
  ParentLabel?: React.ReactNode
  dividerProps?: DividerProps
  child?: IChildren[]
}

interface IChildren extends Omit<CommonTypes, 'style'> {
  label?: string | undefined
  description?: string | undefined
  icon?: React.ReactNode | undefined
  component?: any
  path?: To
  closeWhenOnClick?: boolean | undefined
}

export const MyNav = ({ NavBar }: IRoot) => {
  const dipatch: AppDispatch = useAppDispatch()
  return (
    <>
      {NavBar.map((row, key) => (
        <Navbar key={key} className={row.className} id={row.id} sx={row.sx} {...row.props}>
          {row.Section.map((r, k) => (
            <Navbar.Section key={k} grow component={ScrollArea} sx={r.sx} {...r.props}>
              {r.Parent?.map((parentRow, k) => (
                <Box key={k}>
                  <Divider
                    label={parentRow.ParentLabel}
                    labelPosition="left"
                    sx={parentRow.sx}
                    className={parentRow.className}
                    {...parentRow.dividerProps}
                  />
                  {parentRow.child?.map((childrenRow, k) => (
                    <NavLink
                      key={k}
                      className={childrenRow.className}
                      label={childrenRow.label}
                      description={childrenRow.description}
                      icon={childrenRow.icon}
                      sx={childrenRow.sx}
                      component={childrenRow.component}
                      to={childrenRow.path}
                      onClick={() => childrenRow.closeWhenOnClick && dipatch(sidebarToggle())}
                    />
                  ))}
                </Box>
              ))}
            </Navbar.Section>
          ))}
        </Navbar>
      ))}
    </>
  )
}
