import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from './slices/FilterSlice'
import CartReducer from './slices/CartSlice'
import GoodsReducer from './slices/goodsSlice'


export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    Cart: CartReducer,
    Goods: GoodsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>



