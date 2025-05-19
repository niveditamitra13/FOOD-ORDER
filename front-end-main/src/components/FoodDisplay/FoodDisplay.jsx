import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import axios from "axios";
import { useState, useEffect } from 'react';

const FoodDisplay = ({category}) => {

    const {food_list, setFoods} =useContext(StoreContext);

  // GET request to your API
  useEffect(() => {
    axios.get('http://localhost:4000/api/foods/all')
      .then(response => {
        if (response.data.success) {
          setFoods(response.data.data); 
        } else {
          console.error('Failed to fetch food data');
        }
        // setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching food:', error);
        // setLoading(false);
      });
  }, []);

  return ( 
    <div className='mt-7' >
        <h2 className='text-[max(2vw,24px)] text-left font-semibold'>Top dishes near you</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2   md:grid-cols-3     lg:grid-cols-4    gap-5 mt-7  gap-y-12">
        {food_list.map( (item,index)=>{
          if(category==="All" ||category===item.category){
            return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />)

          }

            
        }

        )}
        </div>
      
    </div>
  )
}

export default FoodDisplay

