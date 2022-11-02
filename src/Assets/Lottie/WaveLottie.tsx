import { Center, useMantineTheme } from '@mantine/core'

import wave from './wave.json'
import { Player } from '@lottiefiles/react-lottie-player'
import React, { useState } from 'react'

interface iProps {
  style?: React.CSSProperties
}
export const WaveLottie = ({ style }: iProps) => {
  const theme = useMantineTheme()

  const [state, setState] = useState({ lottie: null as any })

  return (
    <>
      <Center>
        <Player
          id="wave"
          autoplay
          loop
          src={wave}
          style={style}
          speed={1}
          lottieRef={(instance) => setState({ lottie: instance })}
        ></Player>
      </Center>
    </>
  )
}
