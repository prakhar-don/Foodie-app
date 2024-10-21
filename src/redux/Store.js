import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "../redux/Slices/CartSlice"
import  CategorySlice  from './Slices/CategorySlice'
import  SearchSlice  from './Slices/SearchSlice'

export const Store= configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        search:SearchSlice,

    }
    


})




