import {
  LoginScreen,
  RegisterLogin,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'
export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/signup',
    element: <RegisterLogin />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordScreen />
  }
]
