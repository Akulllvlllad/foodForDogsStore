import React from "react"
import { useSelector } from "react-redux"
import { selectFilter } from "../../redux/slices/FilterSlice"


import { useActions } from "../../useHooks"

export const  Categories: React.FC = () => {
	
  const {categories, isCategory} = useSelector(selectFilter)
  const {setCategory} = useActions()

  return(
		<div className="categories">
								<ul>
									{categories.map((category:any, index: number) => 
										<li key={category} onClick={() => setCategory(index)} className={index === isCategory ? 'active': ''}>{category}</li>
										)}
								</ul>	
    </div>
	)
}