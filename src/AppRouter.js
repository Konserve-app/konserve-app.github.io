import { createBrowserRouter, RouterProvider } from 'react-router-dom';import React from 'react'

import Homepage from './pages/Homepage.js'
import Service from './pages/Service.js'
import NotFoundPage from './pages/NotFoundPage.js'
import Digital from './pages/Digital.js'
import LoginPage from './pages/LoginPage.js'
import Forgetpass from './pages/Forgetpass.js'
import Resetpass from './pages/Resetpass.js'


const router = createBrowserRouter([
    {
      path:'/',
      element: <Homepage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: '/service',
      element: <Service />
    },
    {
      path: '/digital',
      element: <Digital />
    },
    {
      path: '/loginpage',
      element: <LoginPage />
    },
    {
      path: '/Forgetpass',
      element: <Forgetpass />
    },
    {
      path: '/resetpass',
      element: <Resetpass />
    }
  ])
export default function AppRouter() {
  return (
    <RouterProvider router={router} basename={process.env.PUBLIC_URL} />
  );
}

