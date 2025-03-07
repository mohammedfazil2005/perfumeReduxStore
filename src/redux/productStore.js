import { configureStore } from "@reduxjs/toolkit";
import productSlices from './productSlice'

const productStore=configureStore({
    reducer:{
        perfumes:productSlices
    }
})

export default productStore