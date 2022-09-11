import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { RootState } from "../store";







export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods', async ({categoruParams, optionParams, order, searchAPI, changePage}: Record<string, string>) => {
    const {data} = await  axios
    .get<StateItem[]>(`https://63030ea59eb72a839d782203.mockapi.io/items?${changePage}&${categoruParams}${searchAPI}&sortBy=${optionParams}&order=${order}`)
    return data 
  }
)

export const fetchOneGoods = createAsyncThunk(
  'goods/fetchOneGoods', async (id?: string) => {
    const {data} = await  axios
    .get<StateItem>(`https://63030ea59eb72a839d782203.mockapi.io/items/${id}`)
    return data
  }
)



type StateItem = {
  id: string,
  category: number,
  img: string,
  type: string,
  tastes: string[],
  class: string,
  name: string,
  isNew: boolean,
  sizes: string[],
  inStock: boolean[],
  prise: number[],
  minPrise: number,
  rating:number

}



interface GoodsSliceState {
  state: StateItem[],
  isLoading: boolean | 'error',
  oneGoods: StateItem[],
  isLoadingOne: boolean | 'error',
}




const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    state: [],
    isLoading: true,
    oneGoods: [],
    isLoadingOne: true,
  } as GoodsSliceState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
        state.state = action.payload
        state.isLoading = false
    })
    builder.addCase(fetchGoods.pending, (state, action) => {
      state.isLoading = true
      state.isLoadingOne = true
    })

    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.isLoading = 'error'
      state.state = []
    })

  
    // ==================================================
    builder.addCase(fetchOneGoods.fulfilled, (state, action) => {
      state.oneGoods = [action.payload]
      state.isLoadingOne = false
    })
    builder.addCase(fetchOneGoods.pending, (state, action) => {
      state.isLoadingOne = true
      state.isLoading = true
    })

    builder.addCase(fetchOneGoods.rejected, (state, action) => {
      state.isLoadingOne = 'error'
      state.oneGoods = []
    })
  }
})


export const selectGoods = (state: RootState) => state.Goods
//export const {} = goodsSlice.actions

export default goodsSlice.reducer