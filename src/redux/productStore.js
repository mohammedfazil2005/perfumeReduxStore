import { configureStore } from "@reduxjs/toolkit";
import productSlices from './productSlice'
import cartSlice from './cartSlice'

const productStore=configureStore({
    reducer:{
        perfumes:productSlices,
        cart:cartSlice
    }
})

export default productStore