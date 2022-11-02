import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  ColProps,
  CSSObject,
  DefaultMantineColor,
  Grid,
  GridProps,
  Input,
  InputWrapperProps,
  MantineNumberSize,
  MantineSize,
  NumberInput,
  NumberInputProps,
  PasswordInput,
  PasswordInputProps,
  Select,
  SelectItem,
  SelectProps,
  Switch,
  SwitchProps,
  Sx,
  TextInput,
  TextInputProps,
  Tooltip,
} from '@mantine/core'
import { FloatingPosition } from '@mantine/core/lib/Floating'
import { ColSpan } from '@mantine/core/lib/Grid/Col/Col.styles'
import { UseForm } from '@mantine/form/lib/types'
import React, { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { cssLibrary } from '../Assets/_cssLibrary'
import { modalIsOpen, openStack } from '../Context/customizationReducer'
import { useAppDispatch } from '../Context/_hook'
import { AppDispatch } from '../Context/_store'
import { CommonTypes } from '../Types/CommonTypes'

interface IWrapper {
  inputWrapperClassName?: string | undefined
  inputWrapperSx?: Sx | (Sx | undefined)[] | undefined
  label?: React.ReactNode | undefined
  description?: React.ReactNode | undefined
  requireSymbol?: boolean | undefined
  inputWrapperProps?: InputWrapperProps
}

interface IInput extends IWrapper, Omit<CommonTypes, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  props?: TextInputProps
  getValue?: UseForm
}

interface IAutoComplete extends IWrapper, Omit<CommonTypes, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  toolTip?: boolean | undefined
  toolTipLabel?: string | null
  toolTipPosition?: FloatingPosition | undefined
  searchable?: boolean | undefined
  data?: (string | SelectItem)[]
  props?: Omit<SelectProps, 'data' | 'children'>
  getValue?: UseForm
}

interface IPasswordInput extends IWrapper, Omit<CommonTypes, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  props?: PasswordInputProps
  getValue?: UseForm
}

interface INumberInput extends IWrapper, Omit<CommonTypes, 'style'> {
  icon?: React.ReactNode | undefined
  placeholder?: string | undefined
  min?: number | undefined
  max?: number | undefined
  props?: NumberInputProps
  getValue?: UseForm
}

interface IButton extends Omit<CommonTypes, 'style'> {
  disabled?: boolean | undefined
  variant?: 'gradient' | 'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | undefined
  size?: MantineSize | undefined
  icon?: React.ReactNode
  upperCase?: boolean | undefined
  label?: React.ReactNode
  props?: ButtonProps
  onClick?: () => void | undefined
  CrudAction?: JSX.Element | JSX.Element[] | undefined
}

interface ISwitch extends Omit<CommonTypes, 'style'> {
  label?: React.ReactNode
  props?: SwitchProps
  size?: MantineSize | undefined
  onLabel?: React.ReactNode | undefined
  offLabel?: React.ReactNode | undefined
  color?: DefaultMantineColor | undefined
  checked?: boolean | undefined
  onChange?: () => void | undefined
  getValue?: UseForm
}

interface IBox extends Omit<CommonTypes, 'style'> {
  child?: JSX.Element | JSX.Element[] | string | undefined
  ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined
  props?: BoxProps
  onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined
  onClick?: () => void | undefined
}

export interface IColumn extends Omit<CommonTypes, 'style'>, IColumnDocumentation {
  colspan?: ColSpan | undefined
  order?: number | undefined
  TextInput?: IInput[]
  AutoComplete?: IAutoComplete[]
  PasswordInput?: IPasswordInput[]
  NumberInput?: INumberInput[]
  Button?: IButton[]
  Switch?: ISwitch[]
  Box?: IBox[]
  props?: ColProps
}

interface IGridRoot extends Omit<CommonTypes, 'style'>, Omit<IGridRootDocumentation, 'margin'> {
  GridCol: IColumn[]
  gutter?: MantineNumberSize | undefined
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | undefined
  props?: GridProps
}

interface IRoot {
  GridArrayObject: MyGridElement[]
}

export const MyGrid = ({ GridArrayObject }: IRoot) => {
  const [searchValue, onSearchChange] = useState('')
  const dispatch: AppDispatch = useAppDispatch()
  return (
    <>
      {GridArrayObject.map((row, key) => (
        <Grid key={key} m={row.margin} gutter={row.gutter || 'sm'} className={row.className} sx={row.sx} {...row.props}>
          {row.GridCol?.map((col: IColumn, colKey: number) => (
            <Grid.Col key={colKey} span={col.colspan || 'auto'} order={col.order} className={col.className} sx={col.sx} {...col.props}>
              {col.TextInput?.map((r: IInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <TextInput
                    className={r.className}
                    sx={r.sx}
                    icon={r.icon}
                    placeholder={r.placeholder}
                    rightSection={
                      r.toolTip && (
                        <Tooltip label={r.toolTipLabel} position={r.toolTipPosition} withArrow>
                          <div>
                            <FiAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                          </div>
                        </Tooltip>
                      )
                    }
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}
              {col.AutoComplete?.map((r: IAutoComplete, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <Select
                    className={r.className}
                    sx={r.sx}
                    icon={r.icon}
                    placeholder={r.placeholder}
                    searchable={r.searchable || true}
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    nothingFound="No options"
                    data={r.data || ['React', 'Angular', 'Svelte', 'Vue']}
                    rightSection={
                      r.toolTip && (
                        <Tooltip label={r.toolTipLabel} position={r.toolTipPosition} withArrow>
                          <div>
                            <FiAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                          </div>
                        </Tooltip>
                      )
                    }
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}

              {col.PasswordInput?.map((r: IPasswordInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <PasswordInput className={r.className} sx={r.sx} placeholder={r.placeholder} icon={r.icon} {...r.props} {...r.getValue} />
                </Input.Wrapper>
              ))}

              {col.NumberInput?.map((r: INumberInput, k: number) => (
                <Input.Wrapper
                  key={k}
                  withAsterisk={r.requireSymbol || true}
                  label={r.label}
                  description={r.description}
                  className={r.inputWrapperClassName}
                  sx={r.inputWrapperSx}
                  {...r.inputWrapperProps}
                >
                  <NumberInput
                    className={r.className}
                    sx={r.sx}
                    min={r.min || 0}
                    max={r.max}
                    placeholder={r.placeholder}
                    icon={r.icon}
                    {...r.props}
                    {...r.getValue}
                  />
                </Input.Wrapper>
              ))}

              {col.Button?.map((r: IButton, k: number) => (
                <Button
                  key={k}
                  sx={r.disabled ? { ...(cssLibrary('Button')?.disabled as CSSObject) } : { ...r.sx }}
                  disabled={r.disabled || false}
                  variant={r.variant || 'filled'}
                  className={r.className}
                  size={r.size || 'xs'}
                  leftIcon={r.icon}
                  uppercase={r.upperCase || true}
                  onClick={() => (r.CrudAction ? dispatch(modalIsOpen(true)) && dispatch(openStack(r.CrudAction)) : r.onClick?.())}
                  {...r.props}
                >
                  {r.label}
                </Button>
              ))}

              {col.Switch?.map((r, k) => (
                <Switch
                  key={k}
                  label={r.label}
                  size={r.size}
                  onLabel={r.onLabel}
                  offLabel={r.offLabel}
                  color={r.color}
                  sx={r.sx}
                  className={r.className}
                  checked={r.checked}
                  onChange={() => r.onChange?.()}
                  {...r.props}
                  {...r.getValue}
                />
              ))}

              {col.Box?.map((r, k: number) => (
                <Box
                  key={k}
                  onMouseOver={r.onMouseOver}
                  ref={r.ref}
                  className={r.className}
                  sx={r.sx}
                  onClick={() => r.onClick?.()}
                  {...r.props}
                >
                  {r.child}
                </Box>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      ))}
    </>
  )
}

/**
 * `GridRoot`. Required column
 * @example
 * Example(1)
const example:IGrid[] =[
    {
      column: [    ---> <Grid.Col/> Mantine
        {
          colspan: 12, ---> REQUIRED(),
          input: [
            {
              label: 'Username',
              description: 'Username is required!',
              placeholder: 'Your Username',
              icon: <FaUserCircle size={20} />,
              getValue: form.getInputProps('username'),
            },
            {
              label: 'Password',
              description: 'password is required!',
              placeholder: 'Your password',
              icon: <FaKey size={20} />,
              getValue: form.getInputProps('password'),
            },
          ],
        },
        {
          colspan: 6,
          autoComplete: [
            {
              label: 'Role',
              description: 'Role is required!',
              placeholder: 'Role',
              icon: <AiOutlineKey size={20} />,
              data: ['Admin', 'Super User', 'User'],
              getValue: form.getInputProps('role'),
            },
          ],
        },
        {
          colspan: 6,
          numberInput: [
            {
              label: 'Example Number Input',
              description: 'Example',
              icon: <FaSortNumericDown size={20} />,
              getValue: form.getInputProps('currency'),
            },
          ],
        },
      ],
    },
  ]


  return(
    <Box>
        <AppGrid gridRoot={example} />
    </Box>
  )
 */
export type MyGridElement = IGridRoot

interface IColumnDocumentation extends Omit<CommonTypes, 'style'> {
  /**
   *@example
   Example(1)
    colspan = 12
    <Grid.Col span={12}/>

        colspan = 1 "sampai" 12 || "auto" , "content"
   */
  colspan?: ColSpan | undefined

  order?: number | undefined
  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.input.map((row,key)=>(
            <TextInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  TextInput?: IInput[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.autoComplete.map((row,key)=>(
            <Select
            key={key}
            label={row.label}
            icon={row.icon}
            data={row.data || ['React', 'Angular', 'Svelte', 'Vue'] }
            {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  AutoComplete?: IAutoComplete[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.passwordInput.map((row,key)=>(
            <PasswordInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  PasswordInput?: IPasswordInput[]

  /**
   *@example
   Example(1)
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k}>
          {r.numberInput.map((row,key)=>(
            <NumberInput key={key} label={row.label} icon={row.icon} {...props} />
          ))}
        </Grid.Col>
      ))}
    )
   */
  NumberInput?: INumberInput[]

  /**
   *@example
   Example(1)
   [
      {
        column:[
          {
            props:{p:"sm",onClick:()=>handleClick()}
          }
        ]
      }
   ]
    return(
      {column.map((r,k)=>(
        <Grid.Col key={k} {...props}>
        </Grid.Col>
      ))}
    )
   */
  props?: ColProps
}

interface IGridRootDocumentation extends Omit<CommonTypes, 'style'> {
  /**
   * @example
   *
   * [
   *    {
   *      gutter:"sm",
   *      margin:"xs",
   *      props:{p:"xl"},
   *      GridCol:
   *       [
   *          {
   *            colspan:12, ----------> Required(),
   *          },
   *          {
   *            colspan:6,
   *          },
   *      ],
   *    },
   * ]
   *
   * return(
        <Grid gutter="sm" margin="xs" p="xl">
            <Grid.Col colSpan={12}></Grid.Col>
            <Grid.Col colSpan={6}></Grid.Col>
        </Grid>
   * )
   *
   *
   */
  GridCol: IColumn[]
  gutter?: MantineNumberSize | undefined
  margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  props?: GridProps
}
