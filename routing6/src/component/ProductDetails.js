import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

const ProductDetails = props => {
  let params = useParams()
  let [searchParams] = useSearchParams()

  return (
    <>
      <div className='container'>
        <div className='panel panel-danger'>
          <div className='panel-heading'>{params.item} Details Page</div>
          <div className='panel-body'>
            <div className='jumbotron'>
              <h2>{params.item} Details</h2>
              <p>
                {params.item} Details is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
              <h3>You are on page number {searchParams.getAll('page')}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
