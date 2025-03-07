import React from 'react'
import './Features2.css'
import { useDispatch, useSelector } from 'react-redux'
import { onPerfumeClick } from '../../redux/productSlice'
import { useNavigate } from 'react-router-dom'

const Features2 = () => {
    const navigate=useNavigate()
    const {product}=useSelector(state=>state.perfumes)
    const dipatch=useDispatch()
    
    const onHandleClick=(id)=>{
        dipatch(onPerfumeClick(id))
        navigate('/view')
    }
   


    return (
        <div className='features-2-parent'>
            <div className="features-2-left">
                <h1>02</h1>
                <h2>A scent dedicated to sustainability. Find your fragrance.Shop now </h2>
                <p>Our perfumers source every ingredient from sustainably managed, renewable resources, and every bottle is composed of 100% recycled glass.</p>
            </div>
            <div className="features-2-right">
                <div className="image-fe">
                    {product?.map((a,index)=>(
                         <img key={index} src={a.image} onClick={()=>onHandleClick(a.id)} alt="" />
                    ))}
                </div>
                {/* <div className="leaf-div">
                    <img src="https://cdn-imgs.dora.run/design/C8F8AFVYZsDIF4dsEv0uVr.png/w/4096/h/4096/format/webp?" alt="" />
                </div> */}

            </div>
        </div>
    )
}

export default Features2
