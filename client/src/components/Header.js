import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className='brand'>
          <h1>
            <Link to='/'>ProShop</Link>
          </h1>
        </div>
        <div className='nav-left'>
          <Link to='/cart'>🛒Cart</Link>
          <Link to='/login'>👤Login</Link>
        </div>
      </header>
    </div>
  )
}

export default Header
