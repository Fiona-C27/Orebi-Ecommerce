import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from './components/Layouts/RootLayout.jsx';
import Home from './components/pages/Home.jsx';
import Shop from './components/pages/Shop.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Login from './components/pages/Login.jsx';
import Signup from './components/pages/Signup.jsx';
import Account from './components/pages/Account.jsx';
import Cart from './components/pages/Cart.jsx';
import Checkout from './components/pages/Checkout.jsx';
import Error from './components/pages/Error.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      
        <Route index element={<Home />} />
        <Route path = '/product' element={<Shop />} />
        <Route path = '/about' element={<About />} />
        <Route path = '/contact' element={<Contact />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/account' element={<Account />} />
        <Route path = '/cart' element={<Cart />} />
        <Route path = '/checkout' element={<Checkout />} />
        <Route path = '/error' element={<Error />} />
        
        
        
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
