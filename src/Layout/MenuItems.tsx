import { FaAccusoft } from 'react-icons/fa'
import { iconLibrary } from '../Assets/_iconLibrary'

interface IMenuItems {
  key: string
  label: string
  description?: string
  icon: any
  path: string
}

interface IParentMenu {
  label: string
  children: IMenuItems[]
}
export const MenuItems: IParentMenu[] = [
  {
    label: 'Application',
    children: [
      { key: 'home', label: 'Dashboard', icon: iconLibrary('Dashboard', 'MenuSize'), path: '/' },
      //Seed Dont Delete This Comment
    ],
  },
  { label: 'Order', children: [{ key: 'order', label: 'Order', icon: <FaAccusoft size={25} />, path: '/order' }] },
]
