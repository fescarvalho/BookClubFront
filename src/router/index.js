import { createBrowserRouter } from 'react-router-dom';
import { unauthRoutes } from 'src/modules/unauthenticated/routes';
import { authRoutes } from 'src/modules/authenticated/routes';

export const router = createBrowserRouter([...unauthRoutes, ...authRoutes]);
