import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route } from "react-router-dom";

import Product from './Product';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';



const Routing = ()=>{
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/products" component={Product} />
            <Footer/>
        </BrowserRouter>
    );
}

export default Routing;