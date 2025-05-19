import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

    const[currState,setCurrState]=useState("Login")

    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if(currState==="Login") {
            newUrl += "/api/user/login";
        }else{
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl,data); //for both login and register

        if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            alert(response.data.message)
            console.log(response.data.message);
            
        }
    }


  return (
    <div className=' z-10 absolute flex h-[100%]' >
        <form onSubmit={onLogin} className=" w-[max(23vw,330px)] text-gray-800 bg-gray-300 flex flex-col gap-6 px-6 py-7 border-r-5 place-self-center shadow-2xl rounded-xl">
            <div className="flex justify-between items-center text-slate-900 font-bold">
                <h2>{currState}</h2>
                <img className='w-4 cursor-pointer' onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="flex flex-col gap-5">
                {currState==="Login"?<></>:<input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='your name' required />}
                
                <input  onChange={onChangeHandler} name='email' value={data.email} className=' border border-black' type="email" placeholder='your email' required />
                <input  onChange={onChangeHandler} name='password' value={data.password} className='border border-black' type="password" placeholder='your password' required />
            </div>
            <button type='submit' className='border-none bg-red-500 text-white '> {currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-pop-up-condition">
                <input   className='flex' type="checkbox" required />
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
            {currState==="Login"?<p>Create a new account? <span className='cursor-pointer' onClick={()=>setCurrState("Sign Up")} >Click here</span> </p>
            :<p>Already have an account? <span className='cursor-pointer' onClick={()=>setCurrState("Login")}  >Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default LoginPopUp
