import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './Paginas/Home.jsx'
import AMOC from './Paginas/AMOC/AMOC.jsx'
import Contato from './Paginas/Contato/Contato.jsx'
import Info from './Paginas/Info/Info.jsx'
import NotFound from './Paginas/NotFound/NotFound.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home/> },
    {path: 'AMOC', element: <AMOC />},
    {path: 'Contato', element: <Contato/>},
    {path: 'Info', element: <Info />},
    {path: '*', element: <NotFound />},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="67608341999-88j8heqk1btvoutnevt2a3c8sb33s1hr.apps.googleusercontent.com">
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
