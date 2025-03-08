import React, { useEffect } from 'react'
import './ProductView.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { onPerfumeClick } from '../../redux/productSlice'
import toast from 'react-hot-toast'
import { addToCart } from '../../redux/cartSlice'

const ProductView = () => {

    const {selectedData,filterItem}=useSelector(state=>state.perfumes)
    const cartProduct=useSelector(state=>state.cart) 

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const isProductAlreadyExists=cartProduct?.find((a)=>a['id']==selectedData.id)


    const onCartClick=(data)=>{
      dispatch(addToCart(data))
      toast.success('Added to cart!.', {
        style: {
          border: '1px solid green',
          padding: '16px',
          color: 'green',
        },
        iconTheme: {
          primary: 'green',
          secondary: 'white',
        },
      });
    }






    useEffect(()=>{
     if(!selectedData){
      navigate('/')
     }
    },[selectedData])
    
  
  return (
    <div className='product-view-parent'>
     <div className='product-view-img-div'>
        <img src={selectedData?.image} alt="" />
     </div>
     <div className='product-view-details'>
        <div className='product-title-div'>
        <h1>{selectedData?.name}</h1>
        <i class="fa-solid fa-heart"></i>
        </div>
        <h2>₹{selectedData?.price}</h2>
        <h6>50% off Archive Sales.Discount applied in cart</h6>
        <h4>Description:</h4>
        <p>{selectedData?.description}</p>
        {isProductAlreadyExists?<Link to={'/cart'}><button id='buynowbtn'>View in Cart</button></Link>: <button id='buynowbtn' onClick={()=>onCartClick(selectedData)}>Add to cart</button>}
       
        <div className='filtered-products-div'>
            {filterItem?filterItem.slice(0,3).map((a,index)=>(
                <div key={index} onClick={()=>dispatch(onPerfumeClick(a.id))}>
                <img src={a?.image} alt="" />
                {/* <button>View</button> */}
            </div>
            )):""}
        </div>
     </div>
    </div>
  )
}

export default ProductView
