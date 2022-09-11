import React from 'react'

import scss from './scss/NotFound.module.scss'




export const NotFound: React.FC = () => {
	return(
		<div  className={scss.root}>
			<span>🤔</span>
			<h1>НИЧЕГО НЕ НАЙДЕНО! </h1>
			<p>К сожалению данная страница удалена или не существует</p>
		</div>
	)
}
