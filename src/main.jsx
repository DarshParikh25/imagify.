import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Categories from './components/Categories.jsx'
import Home from './components/Home.jsx'
import Explore from './components/Explore.jsx'
import Messages from './components/Messages.jsx'
import Notifications from './components/Notifications.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'explore',
        element: <Explore />
      },
      {
        path: 'messages',
        element: <Messages />
      },
      {
        path: 'notifications',
        element: <Notifications />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
