import React, { Fragment } from 'react'

const Footer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <hr />
      <center>
        <h2>&copy; Developer Funnel - {props.year} : {props.month}</h2>
      </center>
    </Fragment>
  )
}

export default Footer
