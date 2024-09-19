import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SignupForm from '../../pages/admin/Signup'
import LoginForm from '../../pages/admin/Login'
import AddProductForm from '../../pages/admin/Addproduct'
import Home from '../../pages/admin/Home'
import AddCategoryForm from '../../pages/admin/Category'
// import Cart from '../../pages/admin/Cart'
import PrivetRoute from '../../components/admin/PrivetRoute'

import ProductPage from '../../pages/users/ProductPage'


const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/admin/productpage' element={<PrivetRoute><Home/></PrivetRoute>}></Route>
            <Route path='/admin/category' element={<PrivetRoute><AddCategoryForm/></PrivetRoute>}></Route>
            {/* <Route path='/admin/cart' element={<Cart/>}></Route> */}
            <Route path='/admin/addproduct' element={<PrivetRoute><AddProductForm/></PrivetRoute>}></Route>
            <Route path='/admin/signup' element={<SignupForm/>}></Route>
            <Route path='/admin/login' element={<LoginForm/>}></Route>
            
            <Route path='/user/product/:id' element={<ProductPage/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroute