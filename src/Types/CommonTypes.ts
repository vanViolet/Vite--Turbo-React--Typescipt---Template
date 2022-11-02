import { CSSObject, MantineTheme, Sx } from '@mantine/core'
import { IMyOtherTheme } from '../main'

export declare type MySx = CSSObject | ((theme: Omit<MantineTheme, 'other'> & IMyOtherTheme) => CSSObject) | undefined

export interface CommonTypes {
  id?: string | undefined
  className?: string | undefined
  sx?: Sx | (Sx | undefined)[] | undefined
}
