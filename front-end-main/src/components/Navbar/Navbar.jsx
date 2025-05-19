import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] =useState("home");
  const {getTotaCartAmount, token, setToken}=useContext(StoreContext)

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
         /**Navbar */
       <div className='p-2 flex justify-between items-center bg-white rounded-2xl shadow-lg'>
        
       
        <Link to='/'><img src={assets.logo} alt="" className="h-12"  /></Link>
        
        <ul className="navbar-menu hidden lg:flex list-none text-gray-800 gap-5"> 
          <Link to='./'  onClick= {()=>setMenu("home")} className={menu==="home"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>home</Link>
          <a href='#explore-menu-id' onClick= {()=>setMenu("menu")} className={menu==="menu"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>menu</a>
          <a href='#app-download-id' onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>mobile-app</a>
          <a href='#footer-id' onClick= {()=>setMenu("contact us")} className={menu==="contact us"?"pb-0.5 border-b-2 border-solid border-[#49557e] cursor-pointer":""}>contact us</a>
        </ul>

        <div className=' navbar r8 flex items-center gap-8 '>
          {/* <img className=' w-6 ml-2' src={assets.search_icon} alt="" /> */}
          
          <div className="relative">
            <Link to='/Cart'>
              <ShoppingCartIcon className='h-12 text-amber-800'/>
            </Link>
          
              <div className={getTotaCartAmount()===0?"":'absolute min-w-2 min-h-2 bg-red-600 rounded-[5px] top-[-8px] right-[-8px]'}></div>
              
          </div>
          {
            !token?
            <button onClick={()=> setShowLogin(true)}  className=' navbar-button  bg-transparent text-xs text-purple-900 border-2 border-gray-400 py-3  rounded-3xl cursor-pointer hover:bg-red-100 transition duration-300 h-12 w-24 px-3 sm:px-4 md:px-5 lg:px-6  '>sign in</button>
            :
            <div className='flex flex-row'>
              <img className='h-10 p-1 border border-indigo-900 border-spacing-1 rounded-full' src={assets.profile_icon} alt="" />
              <img onClick={logout} className='h-5 my-auto hover:cursor-pointer' src={assets.logout_icon} alt="" />
            </div>
          }
          
        </div>

       </div>
    
  )
}

export default Navbar
