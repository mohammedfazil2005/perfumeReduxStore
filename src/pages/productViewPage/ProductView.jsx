import React, { useEffect } from 'react'
import './ProductView.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onPerfumeClick } from '../../redux/productSlice'

const ProductView = () => {

    const {selectedData,filterItem}=useSelector(state=>state.perfumes)
   
    const dispatch=useDispatch()
    
  
  return (
    <div className='product-view-parent'>
     <div className='product-view-img-div'>
        <img src={selectedData.image} alt="" />
     </div>
     <div className='product-view-details'>
        <div className='product-title-div'>
        <h1>{selectedData.name}</h1>
        <i class="fa-solid fa-heart"></i>
        </div>
        <h2>₹{selectedData.price}</h2>
        <h6>50% off Archive Sales.Discount applied in cart</h6>
        <h4>Description:</h4>
        <p>{selectedData.description}</p>
        <button id='buynowbtn'>Buy Now</button>
        <div className='filtered-products-div'>
            {filterItem?filterItem.slice(0,3).map((a,index)=>(
                <div key={index} onClick={()=>dispatch(onPerfumeClick(a.id))}>
                <img src={a.image} alt="" />
                {/* <button>View</button> */}
            </div>
            )):""}
        </div>
     </div>
    </div>
  )
}

export default ProductView
