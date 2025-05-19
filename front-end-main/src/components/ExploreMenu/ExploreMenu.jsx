import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-4' id='explore-menu-id'>
        <h1 className='text-[#262626] font-medium text-justify text-2xl' >Explore our menu</h1>
        <p className=' max-w-80   sm:max-w-80  md:max-w-80  lg:max-w-96 text-left text-gray-600'>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredients and culinary expertise.
        our mission is to satisfy your cravings and elevate your dinning 
              experience,one delicious meal at a time.</p>
              <div className="flex justify-between gap-2 lg:gap-5 items-center my-5 mx-0 overflow-x-scroll no-scrollbar">
                {menu_list.map((item,index) =>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="min-w-20 max-w-20">
                            <img  className ={category===item.menu_name?"mx-auto border-4 border-solid border-red-600  h-16 w-16 cursor-pointer rounded-full":"mx-auto h-16 w-16 cursor-pointer rounded-full"}  src={item.menu_image} alt="" />
                            <p className='text-xs text-center'>{item.menu_name}</p>
                        </div>
                    )
                })}
              </div>
              < hr  className='mx-10 my-0 h-2 border-none bg-white'/>
    </div>
  )
}

export default ExploreMenu
