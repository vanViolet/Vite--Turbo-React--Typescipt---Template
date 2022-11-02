import { Login } from '../Authentication/Login'
import { MinimalLayout } from '../Layout/_MinimalLayout'

export const AuthRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [{ path: '/login', element: <Login /> }],
}
