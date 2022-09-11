import React from "react";
import { Title } from "../common/Title";
import { Sorting } from '../components/Sorting/Sorting';
import {Categories} from '../components/Categories/Categories'
import { CardContainer } from "../components/Goods/CardContainer";
import {Pagination} from '../components/Pagination/Pagination'
import { useActions } from "../useHooks";
import { selectFilter } from "../redux/slices/FilterSlice";
import { useSelector } from "react-redux/es/exports";






export const HomePage: React.FC = () => {

  const {isCategory, isOption, search, page, options} = useSelector(selectFilter)
  const { fetchGoods} = useActions()

  const categoruParams:string = isCategory ? `category=${isCategory}` : ''
  const optionParams:string = options[isOption].sort.replace('-', '')
  const order:string =  options[isOption].sort.includes('-') ? 'asc' : 'desc'
  const searchAPI:string = search ? `&search=${search}` :  ''
  const changePage:string = `page=${page}&limit=${4}`
  
  React.useEffect(() =>{
    
    fetchGoods({
      categoruParams, 
      optionParams, 
      order, 
      searchAPI, 
      changePage})
    
  }, [isCategory, isOption, search, page, options])


	return (
		<>
			<div className="content__top">
        <Categories />
        <Sorting />
      </div>
        <Title>Все пиццы</Title>
        <CardContainer  />
        <Pagination />
		</>
)}