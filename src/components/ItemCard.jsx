import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import  { MdDelete } from "react-icons/md";
import { removeFromCart } from '../redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import { incrementQty } from '../redux/Slices/CartSlice';
import { decrementQty } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({id,img,price,name,qty}) => {

   const dispatch= useDispatch();
  return (
    
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        
        <img src={img} alt="" className="w-[60px] h-[60px]"/>
      <MdDelete onClick={()=> {dispatch(removeFromCart({id}));
      toast(`${name} Removed!`, {
        icon: '👋',
      });
    }} className="absolute right-7 text-gray-800 cursor-pointer"/>
    
    
    <div className="leading-5">
    <h2>{name}</h2>
    <div className="flex justify-between">
        <span className="text-green-500 font-bold"> {price}</span>

    
    <div className="flex justify-center items-center gap-2 absolute right-7 ">
        <AiOutlinePlus onClick={()=> (qty>=1) ? dispatch(incrementQty({id})):qty=0} className="border-2 border-gray-600 text-xl p-1 text-gray-600 hover:text-white hover:border-none hover:bg-green-500 rounded-md transition-all ease-linear cursor-pointer  "/>
        <span>{qty}</span>
        <AiOutlineMinus onClick={()=>qty>1 ? dispatch(decrementQty({id})) : qty=qty} className="border-2 border-gray-600 text-xl p-1 text-gray-600 hover:text-white hover:border-none hover:bg-green-500 rounded-md transition-all ease-linear cursor-pointer"/>

    </div>
    </div>
    </div>
    
    </div>
  )
}

export default ItemCard