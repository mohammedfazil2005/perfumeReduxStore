import { createSlice } from "@reduxjs/toolkit";

const productSlices=createSlice({
    name:"perfumes",
    initialState:{product:[
        {
            id: 1,
            name: "Women Perfume",
            description: "A luxurious and elegant perfume for women with a delicate blend of floral and woody notes. It opens with a burst of fresh citrus, followed by a heart of jasmine, rose, and lily of the valley. The warm base of sandalwood, vanilla, and musk ensures a long-lasting and sophisticated scent, perfect for any occasion.",
            price: 79.99,
            image: "https://www.pngplay.com/wp-content/uploads/2/Women-Perfume-Transparent-Image.png",
        },
        {
            id: 2,
            name: "Habit Rouge",
            description: "A classic masculine fragrance that embodies elegance and confidence. The top notes offer a refreshing blend of lemon, bergamot, and orange, leading to a rich heart of spicy cinnamon and warm vanilla. A deep base of leather, patchouli, and sandalwood gives this fragrance a bold and unforgettable finish, making it a signature scent for refined gentlemen.",
            price: 89.99,
            image: "https://scentira.in/cdn/shop/files/HABIT_ROUGE_2aad8821-bdce-4e9f-9860-abc93d56d2b6.png?v=1715356251&width=800",
        },
        {
            id: 3,
            name: "Nykaa Exclusive",
            description: "A fresh and invigorating fragrance designed for everyday wear. It opens with a bright combination of green apple, pear, and citrus notes, followed by a heart of floral jasmine, peony, and freesia. The fragrance is rounded off with a soft base of white musk, cedarwood, and amber, giving it a youthful and energetic appeal.",
            price: 69.99,
            image: "https://images-static.nykaa.com/media/catalog/product/e/5/e5224f3G030523.png?tr=w-500",
        },
        {
            id: 4,
            name: "Cuir Intense",
            description: "An intense and bold fragrance that exudes power and sophistication. The scent opens with spicy cardamom and saffron, leading into a heart of smoky leather and woody cedar. The base is enriched with deep oud, amber, and vetiver, making it an alluring choice for those who love strong, long-lasting fragrances with a unique personality.",
            price: 99.99,
            image: "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dw466297c0/2024/FRAGRANCE/ABSOLUS_ALLEGORIA_-_CUIR_INTENSE_EDP_125ml-271455%20(1).png?sw=655&sh=655",
        },
        {
            id: 5,
            name: "Shalimar",
            description: "A timeless oriental fragrance inspired by love and romance. It begins with bright citrus notes of bergamot and lemon, transitioning into an opulent heart of iris, jasmine, and rose. The rich, sensual base of vanilla, tonka bean, and frankincense gives it an unmistakably warm and mysterious charm, making it a perfect scent for special occasions.",
            price: 109.99,
            image: "https://scentira.in/cdn/shop/files/SHALIMAR_d13c895b-4f00-43c3-9a41-15aa22e1b5a7.png?v=1715356357&width=800",
        },
        {
            id: 6,
            name: "Arabian Oud",
            description: "A luxurious Middle Eastern fragrance known for its rich and exotic aroma. It opens with intense notes of saffron, bergamot, and nutmeg, followed by a deep heart of smoky oud, rose, and jasmine. The fragrance settles into a warm and sophisticated base of amber, sandalwood, and musk, making it an irresistible choice for those who appreciate deep, mysterious scents.",
            price: 129.99,
            image: "https://cdn.salla.sa/xAWDQP/60563b5d-3c4b-4d7e-8e5b-91cfe7935767-1000x1000-u3Y6JNIzVMe2hGX2M0KxR15oivKwQICJ4yfNthiH.png",
        }
    ],selectedData:null,filterItem:null},
    reducers:{
        onPerfumeClick:(state,id)=>{
           state.selectedData=state.product.find((a)=>a['id']==id.payload)
           state.filterItem=state.product.filter((a)=>a['id']!=id.payload)
        }
    }
})

export default productSlices.reducer;
export const {onPerfumeClick} = productSlices.actions;