import React from 'react'
import './ShopNow.css'

const ShopNow = () => {
  return (
    <div className='shopnow-parent'>
      <div>
        <img src="https://images-static.nykaa.com/media/catalog/product/e/5/e5224f3G030523.png?tr=w-500" alt="image" />
      </div>
      <div className='shopnow-details-div'>
        <h1>Find your fragrance.</h1>
        <button>Shop now</button>
      </div>
    </div>
  )
}

export default ShopNow
