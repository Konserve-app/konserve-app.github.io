import { createBrowserRouter, RouterProvider } from 'react-router-dom';import React from 'react'

import Homepage from './pages/Homepage.jsx'
import Service from './pages/Service.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Digital from './pages/Digital.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Forgetpass from './pages/Forgetpass.jsx'
import Resetpass from './pages/Resetpass.jsx'


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
      <RouterProvider router={router} />
    );
  }

