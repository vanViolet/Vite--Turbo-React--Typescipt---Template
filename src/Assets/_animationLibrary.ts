import { keyframes } from '@mantine/core'

type IAnimationLibrary = 'HideAnimation'

const animationLibrary = (args: IAnimationLibrary) => {
  const HideAnimation = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  })

  if (args === 'HideAnimation') return HideAnimation
}

export default animationLibrary
