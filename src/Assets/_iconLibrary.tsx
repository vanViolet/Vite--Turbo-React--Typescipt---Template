import { AiFillDashboard, AiOutlineKey, AiOutlineUser } from 'react-icons/ai'
import { BsAt, BsFillKeyFill, BsFilterLeft } from 'react-icons/bs'
import { FaEdit, FaHamburger, FaPlusSquare, FaSun, FaTrashAlt, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { GiMoonBats } from 'react-icons/gi'
import { GrUserSettings } from 'react-icons/gr'
import { MdShoppingCart } from 'react-icons/md'
import { CgUserlane } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'

type IIcon =
  | 'Plus'
  | 'Edit'
  | 'Trash'
  | 'UserOutlined'
  | 'Email'
  | 'Key'
  | 'KeyFill'
  | 'Role'
  | 'Filter'
  | 'Sun'
  | 'Moon'
  | 'Dashboard'
  | 'UserAlt'
  | 'UserCircle'
  | 'ShoppingChart'
  | 'Hamburger'
  | 'Setting'
  | 'LogOut'

type ISize = 'ButtonSize' | 'HeroSize' | 'MenuSize'

export const iconLibrary = (icon: IIcon, size: ISize, color?: string | undefined) => {
  if (icon === 'Plus') return <FaPlusSquare size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Edit') return <FaEdit size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Trash') return <FaTrashAlt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserOutlined') return <AiOutlineUser size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Email') return <BsAt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Key') return <AiOutlineKey size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'KeyFill') return <BsFillKeyFill size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Role') return <GrUserSettings size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Filter') return <BsFilterLeft size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Sun') return <FaSun size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Moon') return <GiMoonBats size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Dashboard') return <AiFillDashboard size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserAlt') return <FaUserAlt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserCircle') return <FaUserCircle size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ShoppingChart') return <MdShoppingCart size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Hamburger') return <FaHamburger size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Setting') return <CgUserlane size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'LogOut') return <FiLogOut size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
}
