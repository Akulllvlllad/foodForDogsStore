import React from "react";
import {Skeleton} from '../../common/Skeleton' 
import { Card } from './Card';

import { useSelector } from "react-redux"
import { selectGoods } from "../../redux/slices/goodsSlice";


export const CardContainer = () => {
  
  const {state, isLoading} = useSelector(selectGoods)

	return (
		<div className="content__items">
			{	isLoading
			? [...Array(8)].map((__, index) => <Skeleton key={index}/>)
			: state.map((obg: any) => <Card key={obg.id} tastes={obg.tastes} size={obg.sizes} price={obg.prise} name={obg.name} id={obg.id} img={obg.img}/>
			)}
		</div>
			
		
)}
