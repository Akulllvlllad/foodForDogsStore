import React from "react"
import debounce from 'lodash.debounce'


import { useActions } from "../../useHooks"
import css from './search.module.scss'




export const Search: React.FC = () => {
  const [value, setValue] = React.useState('')
  
  const {setSearch} = useActions()
  const  searchRef = React.useRef<HTMLInputElement>(null)


  const onClickClear = () => {
    setSearch('')
    setValue('')
    searchRef.current?.focus() 
  }

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
    setSearch(str)
  }, 1000), 
  []
)
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }


  return(
    <div className={css.search}>
      <span>🔍</span>
      <input  ref={searchRef} className={css.root} value={value} onChange={onChangeInput} placeholder="Поиск..."/>
      <p className={value !== '' ? css.active : ''} onClick={onClickClear}>✖</p>
    </div>
  )
}





