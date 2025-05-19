import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ( {id,name,price,description,image}) => {
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='w-full m-auto shadow-lg'>
       
       <div className="relative">
        <img  className='w-full rounded-t-lg' src={image} alt="" />
        {!cartItems[id]
        ? <img className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={()=> addToCart(id)} src= {assets.add_icon_white} alt=""/>
        : <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-3xl bg-white ">
            <img className='w-8 cursor-pointer' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems [id]}</p>
            <img className='w-8 cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>  
    }
       </div>

       <div className="p-7">

        <div className="flex justify-between items-center mb-2">
            <p className='text-xl font-medium'>{name}</p>
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-xl font-medium text-red-600">{price}</p>
        
       </div>
    </div>
  )
}

export default FoodItem
