import { lazy } from 'react'
import { MainLayout } from '../Layout/_MainLayout'

const Dashboard = lazy(() => import('../Views/Dashboard'))

//Seed Component Router Dont Delete This Comment

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Dashboard /> },
    //Seed Path Router Dont Delete This Comment
  ],
}

export default MainRoutes
