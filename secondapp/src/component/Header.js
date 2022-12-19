import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <center>
      <h2>Header</h2>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/products'>Product</Link>
      <hr />
    </center>
  )
}

export default Header
