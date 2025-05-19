import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-24 text-[max(3vw,10px)] text-center font-medium' id='app-download-id'>
        <p>For Better Experience Download <br/> FoodOrder App</p>
        <div className="flex justify-center gap-4 mt-10 cursor-pointer">
            <img className='max-w-24 sm:max-w-80' src={assets.play_store} alt="" />
            <img className='max-w-24 sm:max-w-80' src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
