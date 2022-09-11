import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


import { CartItem, selectCart } from "../../redux/slices/CartSlice"
import { useActions } from "../../useHooks"


type CardProps = {
  id: string, 
  name: string, 
  price: number[], 
  tastes: string[], 
  size: string[], 
  img: string
}


export const Card: React.FC<CardProps> = React.memo(({id, name, price, tastes, size, img = 'https://i.ibb.co/56nyXF7/269-500x500.png' }) => {

	const [currentSize, setCurrentSize] = React.useState<number>(0)
	const [currentTastes, setCurrentTastes] = React.useState<number>(0)
	
  const {item} = useSelector(selectCart)
  const count = item.filter((obj: any )=> obj.id === id).reduce((sum: number, obj: any) => obj.count + sum, 0)

  const {addItem} = useActions()

	const purchase = ( ) => {
    addItem({
      id,
      name,
      price: price[currentSize],
      tastes: tastes[currentTastes],
      size: size[currentSize],
      img,
      count: 0,
    } as CartItem)
	}

	return (
		<div className="block-wrapper">
			<div className="pizza-block">
        <Link to={`/food/${id}`}>
          <img
            className="pizza-block__image"
            src={img}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{name}</h4>
        </Link>
		<div className="pizza-block__selector">
			<ul>
			{tastes.map((taste: string, index: number) => (
					
					<li key={index} onClick={() => setCurrentTastes(index)} className={index ===  currentTastes ? "active":""}>{taste}</li>
					
					))}
				
			</ul>
			<ul>
				{size.map((size, index) => (
					
					<li key={index} onClick={() => setCurrentSize(index)} className={index ===  currentSize ? "active":""}>{`${size} кг.`}</li>
					
					))}
			</ul>
		</div>
		<div className="pizza-block__bottom">
			<div className="pizza-block__price">{`${price[currentSize]} ₽`}</div>
			<div className="button button--outline button--add" onClick={purchase}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
						fill="white"
					/>
				</svg>
				<span>Добавить</span>
				{Boolean(count) && <i>{count}</i>}
			</div>
		</div>
	</div> 
		</div>
		)})