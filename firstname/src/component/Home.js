import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductDisplay from './productDisplay'
import JSON from './db.json'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      productData: JSON,
      filteredData: JSON
    }
  }

  filterProduct = (userInput) => {
    let output = this.state.productData.filter(
      (item)=>{
        return item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ;
      }
    );

    this.setState({
      filteredData : output
    });
  }

  render () {
    return (
      <>
        {/* Here we are recieiving the data from the Child Component */}
        <Header
          userText={data => {this.filterProduct(data)
          }}
        />
        <ProductDisplay prodData={this.state.filteredData} />
        <Footer year='2022' month='December' />
      </>
    )
  }
}

export default Home
