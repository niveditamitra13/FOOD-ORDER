import React from 'react'

const Header = () => {
  return (
    <div className="h-auto my-5 lg:my-8 mx-auto bg-contain relative">
      <img src='header_img.png'/>
        <div className='absolute  flex flex-col items-start gap-1.5 max-w-1/2 bottom-10 left=[6vw]'>
          <h2 className='font-medium text-[max(3.5vw)] text-white ml-2 '  >Order your favorite food here</h2>
            <p className='text-[1vw] text-white ml-2 ' >Choose from a diverse menu featuring a delactable array of dishes crafted 
              with finest ingredients and culinary expertise.</p>
              <p className='text-[1vw] text-white ml-2'> our mission is to satisfy your cravings and elevate your dinning 
              experience,one delicious meal at a time.</p>
            <button className='border-0 font-medium px-[1vw] py[2.3vw] ml-2 bg-white text-[1vw,13px] rounded-[50px]'>ViewMenu</button>
        </div>
      
    </div>
  )
}

export default Header
