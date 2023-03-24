import React from 'react'

function DisplayComponent (props) {
  const renderCity = ({ myCity }) => {
    if (myCity) {
      return myCity.map(item => {
        return <div key={item.state_id}>{item.state}</div>
      })
    }
  }

  return (
    <>
      <center>
        <h2>City List</h2>
        {renderCity(props)}
      </center>
    </>
  )
}

export default DisplayComponent;
