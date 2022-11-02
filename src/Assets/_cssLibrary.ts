import { CSSObject, useMantineTheme } from '@mantine/core'
import { colorLibrary } from './_colorLibrary'

type ICssLibrary = 'FlexItemCenter' | 'Position0000Fixed' | 'Position0000Absolute' | 'Transition' | 'ShadowSm' | 'Button'

export const cssLibrary = (args: ICssLibrary) => {
  const theme = useMantineTheme()

  const FlexItemCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as CSSObject

  const Position0000Fixed = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  } as CSSObject

  const Position0000Absolute = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  } as CSSObject

  const Transition = {
    transitionDuration: '300ms',
  } as CSSObject

  const ShadowSm = {
    boxShadow: theme.colorScheme === 'dark' ? '0 3px 5px rgba(0,0,0,0.5)' : '0 3px 5px rgba(0,0,0,0.5)',
  } as CSSObject

  const Button = {
    success: {
      ...ShadowSm,
      transitionDuration: '100ms',
      backgroundColor: colorLibrary('success'),
      '&:hover': {
        backgroundColor: colorLibrary('hover-success'),
      },
    } as CSSObject,
    danger: {
      ...ShadowSm,
      transitionDuration: '100ms',
      backgroundColor: colorLibrary('danger'),
      '&:hover': {
        backgroundColor: colorLibrary('hover-danger'),
      },
    } as CSSObject,
    warning: {
      ...ShadowSm,
      transitionDuration: '100ms',
      backgroundColor: colorLibrary('warning'),
      '&:hover': {
        backgroundColor: colorLibrary('hover-warning'),
      },
    } as CSSObject,
    info: {
      ...ShadowSm,
      transitionDuration: '100ms',
      backgroundColor: colorLibrary('info'),
      '&:hover': {
        backgroundColor: colorLibrary('hover-info'),
      },
    } as CSSObject,
    disabled: {
      backgroundColor: '#64748b',
      color: 'rgba(0,0,0,0.3)',
    } as CSSObject,
  }

  if (args === 'FlexItemCenter') return FlexItemCenter
  if (args === 'Position0000Fixed') return Position0000Fixed
  if (args === 'Position0000Absolute') return Position0000Absolute
  if (args === 'Transition') return Transition
  if (args === 'ShadowSm') return ShadowSm
  if (args === 'Button') return Button
}
