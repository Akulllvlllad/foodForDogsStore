import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getCardFromLs, getPriceFromLs } from '../../@types/utils/getCardFromLS'
import { RootState } from '../store'



const updatePrice = (state: CardSliceState) => state.totalPrice = state.item.reduce((sum: number, obj) => obj.price * obj.count + sum, 0)



export type CartItem ={ 
  id: string,
  name: string,
  price: number,
  tastes: string,
  size: string,
  img: string,
  count: number,
}

interface CardSliceState {
    totalPrice: number,
    item: CartItem[],
    totalCount: number,
}


 const {item, totalPrice} = getCardFromLs()

const initialState:CardSliceState = {
  totalPrice,
  item,
  totalCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addItem(state, action: PayloadAction<CartItem>){
      const addItem = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size  && obj.tastes === action.payload.tastes)
      if(addItem){
        addItem.count++
      }else{
        state.item = [...state.item, {...action.payload, count: 1}]
      }
      updatePrice(state)
      state.totalCount++
    },
    clearItems(state){
      state.item = []
      state.totalPrice = 0
      state.totalCount = 0
    },
    deleteOne(state, action: PayloadAction<{id:string, size:string, tastes:string}>){
      const addItem = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size  && obj.tastes === action.payload.tastes)
      if(addItem){
        addItem.count--
      }
      updatePrice(state)
      state.totalCount--
    },
    addOne(state,action: PayloadAction<{id:string, size:string, tastes:string}> ){
      const addItem = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size  && obj.tastes === action.payload.tastes)
      if(addItem){
        addItem.count++
      }
      updatePrice(state)
      state.totalCount++
    },
    deleteAll(state, action: PayloadAction<{id:string, size:string, tastes:string}>){
      state.item = [...state.item.filter(obj => !(obj.id === action.payload.id && obj.size === action.payload.size  && obj.tastes === action.payload.tastes))]
      updatePrice(state)
      state.totalCount = state.item.reduce((sum, obj) => obj.count + sum, 0)
    }
  },
  extraReducers:{}
})


export const selectCart = (state: RootState) => state.Cart

export const {addItem, clearItems, deleteAll, addOne, deleteOne} = cartSlice.actions

export default cartSlice.reducer