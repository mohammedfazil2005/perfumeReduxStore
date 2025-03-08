import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,data)=>{
            state.push({...data.payload,quantity:1,totalPrice:data.payload.price})
        },
        increaseCart:(state,data)=>{
            const isProductAlreadyExistInCart=state.find((a)=>a['id']==data.payload.id)
            if(isProductAlreadyExistInCart.quantity>0){
                isProductAlreadyExistInCart.quantity++
                isProductAlreadyExistInCart.totalPrice=isProductAlreadyExistInCart.price*isProductAlreadyExistInCart.quantity
            }
           
        },
        decreaseCart:(state,data)=>{
            const isProductAlreadyExistInCart=state.find((a)=>a['id']==data.payload.id)
            if(isProductAlreadyExistInCart.quantity>1){
                isProductAlreadyExistInCart.quantity--
                isProductAlreadyExistInCart.totalPrice=isProductAlreadyExistInCart.price*isProductAlreadyExistInCart.quantity
            }else{
                return state.filter((a)=>a['id']!=data.payload.id)
            }
           
        },
        removeCart:(state,data)=>{
            return state.filter((a)=>a['id']!=data.payload.id)
        },
        checkoutCart:(state)=>{
            return state=[]
        }
    }
})

export default cartSlice.reducer;
export const {addToCart,decreaseCart,increaseCart,removeCart,checkoutCart} =cartSlice.actions;