import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store'


type OptionsItems ={
  name: 'популярности👇' | 'цене 👇' | 'алфавиту(Я-А)'| 'популярности👆' | 'цене👆' | 'алфавиту(А-Я)',
  sort: 'rating' | 'minPrise' | 'name'| '-rating' | '-minPrise' | '-name',
}

interface FilterSliceState {
    options: OptionsItems[],
    categories: string[],
    isCategory: number,
    isOption: number,
    search: string,
    page: number,
}
const initialState:FilterSliceState = {
  options: [ 
    {name:'популярности👇', sort:'rating'}, 
    {name:'цене 👇', sort:'minPrise'}, 
    {name:'алфавиту(Я-А)', sort:'name'},
    {name:'популярности👆', sort:'-rating'}, 
    {name:'цене👆', sort:'-minPrise'}, 
    {name:'алфавиту(А-Я)', sort:'-name'},
  ],
  categories: ['Все', 'Регулярная линейка', 'Запеченые', 'Ветеринарный', 'Для щенков'],
  isCategory: 0,
  isOption: 0,
  search: '',
  page: 1,
}
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.isCategory = action.payload
    },
    setOption(state, action: PayloadAction<number>) {
      state.isOption = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    
    
  },
  extraReducers:{

  }
})

  
export const selectFilter = (state: RootState) => state.filter

export const {setCategory, setOption, setSearch, setPage} = filterSlice.actions 
export default filterSlice.reducer