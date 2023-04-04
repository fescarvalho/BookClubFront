import { createBrowserRouter } from 'react-router-dom'
import { unauthRoutes } from 'src/modules/unauthenticated/routes'

export const router = createBrowserRouter([...unauthRoutes])
