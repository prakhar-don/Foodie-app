import React from 'react'
import { MdOutlineStar } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';


const FoodCard = (props) => {

   const dispatch = useDispatch();
  return (
    <div  className="font-bold bg-white w-[250px] p-5 flex flex-col rounded-lg">
      <img src={props.img}  alt=""
      
      className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"/>
    
    <div className="text-sm flex justify-between">
      <h2>{props.name}</h2>
      <span> ₹{props.price}</span>



    </div>

    <p className="text-sm font-normal"> {props.desc.slice(0,50)}</p>
    <div className="flex justify-between">
      <span className="flex  justify-center items-center">
        <MdOutlineStar className="mr-1 text-yellow-300"/> {props.rating}

      </span>
      <button onClick={()=>{ dispatch(addToCart({name:props.name , price:props.price , rating:props.rating , id:props.id , img:props.img, qty:1}));

     props.handleToast(props.name);}} className="bg-green-500 p-1 text-white hover:bg-green-600 rounded-lg text-sm">Add to Cart</button>
    </div>
    
    
    </div>
  )
}

export default FoodCard;