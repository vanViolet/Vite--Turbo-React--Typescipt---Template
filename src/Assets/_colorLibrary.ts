import { useMantineTheme } from '@mantine/core'

export type IColor =
  | 'MAIN_COLOR'
  | 'header-text'
  | 'side-bar'
  | 'main-header-paper-outlet'
  | 'hover-header-bg'
  | 'hover-header-text'
  | 'success'
  | 'info'
  | 'danger'
  | 'warning'
  | 'hover-success'
  | 'hover-info'
  | 'hover-danger'
  | 'hover-warning'
  | 'hover-text'
  | 'hover-bg'
  | 'active-text'
  | 'active-bg'

export const colorLibrary = (color: IColor) => {
  const theme = useMantineTheme()
  if (color === 'MAIN_COLOR') return theme.colorScheme === 'dark' ? 'rgba(39,39,42,0)' : 'rgba(11,67,99,1)'
  if (color === 'header-text') return theme.colorScheme === 'dark' ? '#c1c2c5' : 'white'
  if (color === 'hover-header-bg') return theme.colorScheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.2)'
  if (color === 'hover-header-text') return theme.colorScheme === 'dark' ? 'white' : 'white'
  if (color === 'side-bar') return theme.colorScheme === 'dark' ? 'rgba(39,39,42,0.1)' : 'rgba(255,255,255,1)'
  if (color === 'main-header-paper-outlet') return theme.colorScheme === 'dark' ? '#32343a' : 'rgba(11,67,99,1)'

  if (color === 'hover-text') return theme.colorScheme === 'dark' ? '#0284c7' : '#0284c7'
  if (color === 'hover-bg') return theme.colorScheme === 'dark' ? 'rgba(30,144,255,0.05)' : 'rgba(30,144,255,0.05)'
  if (color === 'active-text') return theme.colorScheme === 'dark' ? '#0284c7' : '#0284c7'
  if (color === 'active-bg') return theme.colorScheme === 'dark' ? 'rgba(30,144,255,0.1)' : 'rgba(30,144,255,0.1)'

  /**
   * Button Color Variant
   */
  if (color === 'success') return '#4d7c0f'
  if (color === 'danger') return '#b91c1c'
  if (color === 'info') return '#0284c7'
  if (color === 'warning') return '#d97706'
  if (color === 'hover-success') return '#365314'
  if (color === 'hover-danger') return '#7f1d1d'
  if (color === 'hover-info') return '#075985'
  if (color === 'hover-warning') return '#92400e'
}
