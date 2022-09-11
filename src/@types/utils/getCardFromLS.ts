import { CartItem } from "../../redux/slices/CartSlice"

export const getPriceFromLs = (state: CartItem[] ) => {
  return state.reduce((sum: number, obj) => obj.price * obj.count + sum, 0)
}


export const getCardFromLs = () => {
  const data = localStorage.getItem('cart')
  const item = data ? JSON.parse(data) : []
  const totalPrice = getPriceFromLs(item)
  
  return {
    item,
    totalPrice
  }
  
}


