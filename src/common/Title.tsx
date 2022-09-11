import React from "react"


type TitleProps = {
  children: string
}

export const Title: React.FC<TitleProps>= ({children}) => {
  
	return (
		<h2 className="content__title">{children}</h2>
)}