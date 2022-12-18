import React, { Component, Fragment } from 'react'
import './header.css'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      title: 'React Developer Funnel',
      keyword: 'User Text Here '
    }
  }

  handleOnchange = event => {
    this.setState({ keyword: event.target.value })

    //Here we are passing the data to the parent component
    this.props.userText(event.target.value)
  }

  render () {
    return (
      <Fragment>
        <header>
          <div className='logo'>{this.state.title}</div>
          <center>
            <input onChange={this.handleOnchange} />
            <div style={{ color: 'white', fontSize: '20px' }}>
              {this.state.keyword}
            </div>
          </center>
        </header>
        <hr />
      </Fragment>
    )
  }
}

export default Header
