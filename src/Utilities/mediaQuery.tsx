import { useMediaQuery } from '@mantine/hooks'

export const mediaQuery = (arg: 'mobile' | 'dekstop') => {
  const mobile = useMediaQuery('(max-width:768px)')
  const dekstop = useMediaQuery('(min-width:768px)')

  if (arg === 'mobile') return mobile
  else return dekstop
}
