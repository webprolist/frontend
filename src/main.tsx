import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './pages/Landing.tsx';
import My from './pages/My.tsx';
import ProductList from './pages/ProductList.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import CreateList from './pages/CreateList.tsx';
import SignIn from './pages/SignIn.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
        index: true,
      },
      {
        path: "/main",
        element: <ProductList />
      },
      {
        path: "/list/@user/1",
        element: <ProductDetail />
      },
      {
        path: `/@user`,
        element: <My />
      },
      {
        path: '/create-list',
        element: <CreateList />
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
