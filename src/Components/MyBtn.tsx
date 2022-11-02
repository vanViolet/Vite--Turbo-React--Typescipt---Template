import { Button, ButtonProps, MantineSize } from '@mantine/core'
import React from 'react'
import { IColor } from '../Assets/_colorLibrary'
import { modalIsOpen, openStack } from '../Context/customizationReducer'
import { useAppDispatch } from '../Context/_hook'
import { AppDispatch } from '../Context/_store'
import { CommonTypes } from '../Types/CommonTypes'

interface IMyBtn extends Omit<CommonTypes, 'style'> {
  disabled?: boolean | undefined
  variant?: 'gradient' | 'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | undefined
  color?: IColor | undefined
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean | undefined
  label?: React.ReactNode
  CrudActionOpenModal?: JSX.Element | JSX.Element[] | undefined
  props?: ButtonProps
  onClick?: () => void | undefined
}

export const MyBtn = ({ sx, className, disabled, variant, size, icon, upperCase, label, CrudActionOpenModal, onClick, props }: IMyBtn) => {
  const dispatch: AppDispatch = useAppDispatch()
  function handleCrud() {
    dispatch(modalIsOpen(true))
    dispatch(openStack(CrudActionOpenModal))
  }

  return (
    <Button
      sx={sx}
      disabled={!disabled || false}
      variant={variant || 'filled'}
      className={className}
      size={size || 'xs'}
      leftIcon={icon}
      uppercase={upperCase || true}
      onClick={() => (CrudActionOpenModal ? handleCrud() : onClick?.())}
      {...props}
    >
      {label}
    </Button>
  )
}
