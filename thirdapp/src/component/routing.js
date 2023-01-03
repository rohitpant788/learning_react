import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Footer from './footer'
import Header from './header'
import Home from './Home/Home'
import Listing from './Listing/listing';
import Details from './details/restDisplay';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/listing/:id' component={Listing} />
      <Route  path='/details' component={Details} />
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
