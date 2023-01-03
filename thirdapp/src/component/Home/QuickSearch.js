import React, { Component } from 'react'
import './QuickSearch.css'
import QuickDisplay from './QuickDisplay'

const quickUrl = 'http://3.17.216.66:4000/quicksearch'
class QuickSearch extends Component {
  constructor () {
    super()

    this.state = {
      mealTypes: ''
    }
  }

  render () {
    return (
      <>
        <div id='quickSearch'>
          <span id='QuickSearchHeading'>Quick Search</span>
          <span id='QuickSubHeading'>Find Restuarants By MealType</span>
          {/* Step 2: PAssing the state to props in Child Componet */}
          <QuickDisplay mealData={this.state.mealTypes} />
        </div>
      </>
    )
  }

  //Step 1 : Calling the API and passing the data in state variable mealTypes
  componentDidMount () {
    fetch(quickUrl, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        this.setState({ mealTypes: data })
      })
  }
}

export default QuickSearch
