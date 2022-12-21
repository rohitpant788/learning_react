import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Footer from './footer'
import Header from './header'
import Home from './Home/Home'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
