import React, { Component } from 'react'
import './Search.css'

const url = 'http://3.17.216.66:4000/location'
const restUrl = 'http://3.17.216.66:4000/restaurant?stateId='
class Search extends Component {
  constructor () {
    super()

    this.state = {
      location: '',
      restuarants: ''
    }
  }

  renderCity = data => {
    if (data) {
      return data.map(item => {
        return (
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        )
      })
    }
  }

  renderRestaurants = data => {
    if (data) {
      return data.map(item => {
        return (
          <option value={item.restaurant_id} key={item._id}>
            {item.restaurant_name} | {item.address}
          </option>
        )
      })
    }
  }

  handleState = event => {
    let state_id = event.target.value
    fetch(`${restUrl}${state_id}`, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ restuarants: data })
      })
  }

  render () {
    return (
      <>
        <div id='search'>
          <div id='logo'>
            <span>D!</span>
          </div>
          <div id='heading'>Search Place Near to You</div>
          <div id='dropdown'>
            <select onChange={this.handleState}>
              <option value='default'>---SELECT CITY---</option>
              {this.renderCity(this.state.location)}
            </select>
            <select id='restuarants'>
              <option value='default'>---SELECT RESTAURANTS---</option>
              {this.renderRestaurants(this.state.restuarants)}
            </select>
          </div>
        </div>
      </>
    )
  }

  //calling Api on page load
  componentDidMount () {
    //console.log(">>>>inside componentDidMount")
    fetch(url, { method: 'GET' })
      // return the promise
      .then(res => res.json())
      //return the data
      .then(data => {
        console.log(data)
        this.setState({ location: data })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default Search
