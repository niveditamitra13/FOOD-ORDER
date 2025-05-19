import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/outline'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotaCartAmount } = useContext(StoreContext);
  const navigate =useNavigate();
  return (
    <div className="mt-24">
      <div className="cart-items">
        <div className="grid grid-cols-6 font-medium text-red-500 ">
          <p className="grid-cols-1">Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
            <div key={index}>
              <div className="grid grid-cols-6 mx-2 my-0 text-black">
                <img className="w-12 mb-3 " src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer" >
                  <TrashIcon className='text-red-800 h-5 sm:h-6 lg:h-7 m-auto'/>
                </p>
              </div>
              <hr className="h-1 bg-white" />
            </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom  mt-20 flex flex-col lg:flex-row justify-between gap-8">
        <div className="cart-total flex-1 flex-col gap-5 ">
          <h2 className="font-bold gap-4 mb-4 text-2xl" >Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>{getTotaCartAmount()===0?0:getTotaCartAmount()}</p>
            </div>
            <hr className="" />
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>{getTotaCartAmount()===0?0:2}</p>
            </div>
            <hr className=""/>
            <div className="cart-total-details flex justify-between text-gray-700 ">
              <b  >Total</b>
              <p>{getTotaCartAmount()===0?0:getTotaCartAmount()+2}</p>
              </div>
              
          </div>
          <button onClick={()=>navigate('/order')}  className="text-white bg-red-500 px-8 lg:w-96">PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode px-5  justify-start  ">
          <div>
            <p className="text-gray-700 ">If you have a promocode enter it here</p>
            <div className="cart promocode input mt-3 flex justify-between items-center  border-r-4 " >
              <input className="border bg-gray-300"  type="text" placeholder="promocode" />
              <button className="text-white bg-black border px-2 ">submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
