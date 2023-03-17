import { combineReducers } from "@reduxjs/toolkit"
import productReducer from "./products/products-reducer"
import cartReducer from "./cart/cart-reducers"
import readmoreReducer from "./readmore/readmore-reducer"

export const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  readmoreReducer
})


