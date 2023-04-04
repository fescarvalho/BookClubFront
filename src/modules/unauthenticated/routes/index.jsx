import { LoginScreen, RegisterLogin } from '../screens'
export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/signup',
    element: <RegisterLogin />
  }
]
