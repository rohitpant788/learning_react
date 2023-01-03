import React, { Component } from 'react'
import axios from 'axios'
import './listing.css'
import ListDisplay from './listingDisplay'

const restOnMeal = 'http://3.17.216.66:4000/restaurant?mealtype_id='

class Listing extends Component {
  constructor () {
    super()
    this.listDatas = [];
    this.state = {
      restuarantList: ''
    }
  }

  render () {
    return (
      <div className='row'>
        <div id='mainListing'>
          <div id='filter'></div>
          <ListDisplay listData={this.state.restaurantList}/>
        </div>
      </div>
    )
  }

  //Calling the api using axios
  componentDidMount () {
    let mealId = this.props.match.params.id ? this.props.match.params.id : 1
    sessionStorage.setItem('mealId', mealId)

    /* axios.get(`${restOnMeal}${mealId}`).then(res => {
      this.setState({ restaurantList:res.data }/* ,function () {
        console.log(`==================${this.state.restaurantList}`);
        this.listDatas = this.state.restaurantList;
      } )
    }) */

    axios.get(`${restOnMeal}${mealId}`).then(res => {
      this.setState({ restaurantList:res.data })
    })

  }
}

export default Listing
