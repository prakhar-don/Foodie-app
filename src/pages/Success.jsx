import React from 'react'
import { PropagateLoader } from 'react-spinners'
import { useState,useEffect } from 'react'

const Success = () => {

  const [loading,setLoding]= useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoding(false);
    },3000)
  },[]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      { 
      loading ? (<PropagateLoader color="#070404" />
       ) :(
        <div>
       < h2 className="text-3xl font-semibold mb-4 text-center">Order Sucessful!</h2>
      <p>Your order has been sucessfully placed!!</p>
      </div>
       )
}
        
      
    </div>
  )
}

export default Success