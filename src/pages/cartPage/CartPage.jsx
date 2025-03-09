import React, { useEffect, useState } from 'react'
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, checkoutCart, decreaseCart, increaseCart, removeCart } from '../../redux/cartSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const CartPage = () => {

    const cartData=useSelector(state=>state.cart)
    const dispatch=useDispatch()

    const [total,setTotal]=useState(0)


    const onCheckout=()=>{
       if(cartData.length>0){
        dispatch(checkoutCart())
        toast.success('Order success!.', {
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
       }else{
        toast.error('Cart is empty!.', {
            style: {
              border: '1px solid red',
              padding: '16px',
              color: 'red',
            },
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
          });
       }
    }

    const cartRemoveItem=(item)=>{
      dispatch(removeCart(item))
      toast.success('Item removed from the cart!.', {
        style: {
          border: '1px solid green',
          padding: '16px',
          color: 'green',
        },
        iconTheme: {
          primary: 'green',
          secondary: 'white',
        }})
      
      
    }

    useEffect(()=>{
        setTotal(cartData.reduce((a,b)=>a+b['totalPrice'],0))
    },[cartData])

    


  return (
    <div className='cart-parent'>
          <div className='left-cart'>
         <div className='left-cart-heading'>
         <h1>{cartData.length>0?"Your Scent Basket!":""}</h1>
         <p>{cartData.length} items</p>
         </div>
     {cartData?.length>0?cartData?.map((a)=>(
       
         <div className='left-cart-box' >
          <img src={a.image} alt="" />
          <h1>{a.name}</h1>
           <div className='left-cart-quantity'>
              <button onClick={()=>dispatch(decreaseCart(a))}>-</button>
              <input type="text" value={a.quantity}/>
              <button onClick={()=>dispatch(increaseCart(a))}>+</button>
           </div>
           <h2>{a.totalPrice}</h2>
           <button style={{backgroundColor:'transparent',border:'none'}} onClick={()=>cartRemoveItem(a)}>x</button>
         </div>
       
     )):<div className='flex justify-center items-center text-center'>
        <img src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DAJFJtWIZAAC" style={{width:'300px'}} alt="" />
        <Link to={'/'}><button className='btn '>Shop Now! <i className="fa-solid fa-arrow-right"></i></button></Link></div>}
      </div>
      {cartData.length>0&&(
        <>
        <hr id='hr-cart'/>
        <div className="right-cart">
          <h1>Summary</h1>
          <h2>Give code</h2>
          <input type="text" className='form-control w-50' placeholder='Give code' />
          <hr />
          {cartData?.length>0?cartData?.map((a)=>(
             <h3>{a.name} <span>x</span> {a.quantity}</h3>
          )):""}
         
          <div>
              <p>Totalprice</p>
              <h6>₹{total}</h6>
          </div>
          <button className='btn btn-primary w-50' onClick={()=>onCheckout()}>Checkout</button>
        </div>
        </>
      )}
      
    </div>
  )
}

export default CartPage
