import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='card'>
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className='card-info'>
        <Link to={`/products/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>

        <Rating value={product.rating} text={`${product.numReviews} reviews`} />

        <h2>${product.price}</h2>
      </div>
    </div>
  )
}

export default Product
