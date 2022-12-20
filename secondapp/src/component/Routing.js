import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Product from './Product'
import Profile from './Profile'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ProductDetails from './ProductDetails';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Product} />
        <Route path='/products/:item' component={ProductDetails} />
        <Route path='/profile' component={Profile} />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
