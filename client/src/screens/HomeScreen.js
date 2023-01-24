import React from 'react'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1 className='latest'>Latest Products</h1>
      <div className='card-container'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default HomeScreen
