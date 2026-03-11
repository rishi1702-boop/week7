import {createBrowserRouter, RouterProvider} from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Contactus from "./components/Contactus";
import Product from "./components/Product";
import React from 'react'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[{
        path:"",
        element:<Home/>
      },
      {
        path:"productList",
        element:<ProductsList/>,
      },
      {
        path:"contactus",
        element:<Contactus/>
      },{
        path:"product",
        element:<Product/>
      }
      
    ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App