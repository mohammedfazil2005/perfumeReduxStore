import React from 'react'
import './Home.css'
import Header from '../../pages/header/Header'
import Features from '../../pages/features/Features'
import Features2 from '../../pages/features2/Features2'
import Features3 from '../../pages/features3/Features3'
import ShopNow from '../../pages/shopnow/ShopNow'

const Home = () => {
  return (
    <>
    <div className='frag-animation-div'>
        <img src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-fragrance-transparent-mens-perfume-glass-bottle-png-image_9143321.png" alt="" />
    </div>
    <div>
        <Header/>
        <Features/>
        <Features2/>
        <Features3/>
        <ShopNow/>
    </div>
    </>
  )
}

export default Home
