import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductDisplay from './productDisplay'
import JSON from './db.json'

class Home extends React.Component {

    constructor(){
        super();

        this.state = {
            productData: JSON
        }
    }


  render () {
    return (
      <>
        <Header />
        <ProductDisplay prodData={this.state.productData}/>
        <Footer year='2022' month='December' />
      </>
    )
  }
}

export default Home
