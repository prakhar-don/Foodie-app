import React from 'react'
import FoodData from '../data/FoodData'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/Slices/CategorySlice'
import { useSelector } from 'react-redux'

const CategoryMenu = () => {

  const [category, setCategories] = useState([]);

  const ListUniqueCategoris=()=>{
    const uniqueCategories= [...new Set(FoodData.map((food)=> food.category))];

    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }

  useEffect(()=>{

    ListUniqueCategoris();

  },[]);

  const dispatch= useDispatch();
  const SelectedCategory= useSelector((state)=> state.category.category);



  return (
    <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the best food</h3>
        <div className=" my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button onClick={()=> dispatch(setCategory("All"))} className={`py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${SelectedCategory === "All" && "bg-green-500 text-white"} `}>All</button>
            
            { category.map((cat,index)=>{
              return  (<button key={index} onClick={()=> dispatch(setCategory(cat))} className={`py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${SelectedCategory === cat && "bg-green-500 text-white"}`}>{cat}</button>
              )
            }
            )
            
           
}
           
        </div>
    </div>
  )
}

export default CategoryMenu