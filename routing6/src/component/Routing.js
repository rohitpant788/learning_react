import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Main from './Main'
import Product from './Product'
import ProductDetails from './ProductDetails'
import Profile from './Profile'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Main/>}/>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="products" element={<Product/>}/>
            <Route path="products/:item" element={<ProductDetails/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="*" element={
                <div>
                    <center>
                        <h1>Not Found Page</h1>
                    </center>
                </div>
            }/>
        <Route/>
    </Routes>
    <Footer/>
</BrowserRouter>
  )
}

export default Routing
