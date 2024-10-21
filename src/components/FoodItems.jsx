import React from 'react'
import FoodCard from './FoodCard.jsx'
import FoodData from  "../data/FoodData.js"
import toast,{Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {
    const handleToast =(name)=> toast.success(`Added ${name}`);

    const Category= useSelector((state)=> state.category.category);

    const Searched= useSelector((state)=>state.search.search);
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      { FoodData.filter((food)=>{
        if(Category === "All"){
          return(
            food.name.toLowerCase().includes(Searched.toLowerCase())
            
          )
        }
        else{
         return food.category === Category &&   food.name.toLowerCase().includes(Searched.toLowerCase())
        }
      }).map((food)=>{
        return <FoodCard {...food } 
        handleToast={handleToast} 

/>
      })
    }

    </div>
    </>
  )
}

export default FoodItems