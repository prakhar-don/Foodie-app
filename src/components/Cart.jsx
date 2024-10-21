import React from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const cartItems= useSelector((state)=>state.cart.cart);

  const totalQty= cartItems.reduce((totalQ, item)=> totalQ + item.qty,0);

  const totalPrice= cartItems.reduce((total,item)=> total + item.qty * item.price,0);
  console.log(cartItems);

  const navigate=useNavigate();

  const [activeCart,setActiveCart]= useState(false);
  
  
  return (
    <>
    <div className={`fixed top-0 right-0 w-full h-full lg:w-[20vw]  bg-white p-5 mb-3  ${activeCart ? "translate-x-0" : "translate-x-full"}
    transition-all duration-500 z-50 `}>
        <div className="flex justify-between items-center my-3">
            <span className="text-xl font-bold text-gray-800">My Orders</span>
            <IoMdClose  onClick={()=>setActiveCart(!activeCart)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"/>

        </div>
        
           {cartItems.length > 0 ? cartItems.map((item)=>{
            return <ItemCard key={item.id}
                  id={item.id}
                  qty={item.qty}
                  name={item.name}
                  price={item.price}
                  img={item.img}
            
            
            
            />
          
            
          }): <h1 className="text-center font-bold text-xl text-gray-800">Your cart is empty</h1>}

        
        <div className="absolute bottom-0">
            <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
            <h3 className="font-semibold text-gray-800">Total amount : {totalPrice}</h3>
            <hr className="w-[90vw] lg:w-[18vw] my-2"/>
            <button onClick={()=> navigate("/success")}className="bg-green-500 font-bold rounded-lg p-2 w-[90vw] lg:w-[18vw] hover:text-white mb-5 ">Checkout</button>
        </div>
    </div>
    <FaShoppingCart onClick={()=> setActiveCart(!activeCart)} className={` rounded-full bg-white text-5xl p-3 fixed bottom-10 right-4 cursor-pointer ${totalQty >0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  )
}

export default Cart