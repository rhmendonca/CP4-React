import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import VisualizarAparelho from './routes/EditarProdutos/EditarProdutos.jsx'
import Erro404 from './routes/Error404/Error404.jsx'
import Aparelhos from './routes/Aparelhos/Aparelhos.jsx'

const router = createBrowserRouter([
  {path: '/', 
  element: <App/>,
  errorElement: <Erro404/>,
  children:[
    {
      path: '/', 
      element: <Home/>
    },
    {
    path: '/aparelhos', 
    element: <Aparelhos/>},
    {
    path: '/aparelhos/visualizar/:id', 
    element: <VisualizarAparelho/>},
    {
      path: "/antiga",
      element: <Navigate to="/"/>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)