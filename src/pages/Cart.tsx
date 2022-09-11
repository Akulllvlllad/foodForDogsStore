import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CartCard } from "../components/Goods/CartCard"
import { useActions } from "../useHooks"
import { selectCart } from "../redux/slices/CartSlice"


export const CardPage: React.FC = () => {
  const {item, totalPrice, totalCount} = useSelector(selectCart)
  const {clearItems} = useActions()


  const onClickRemove = () => {if (window.confirm("Are you sure you want to delete all cards?")) {
      clearItems()
    }
  }
	return (
		<div className="cart">
            <div className="cart__top">
              <h2 className="content__title"> Корзина</h2>
              <div className="cart__clear">
                
                <span onClick={() => onClickRemove()}>Очистить корзину</span>
              </div>
            </div>

            {Boolean(item.length)
            ? item.map((obj: any, index: number) => <CartCard 
              key={index}
              price={obj.price}
              name={obj.name} 
              count={obj.count} 
              size={obj.size} 
              tastes={obj.tastes} 
              img={obj.img} 
              id={obj.id}/>)

            : <div className="cart__item"> Корзина пуста</div>}

            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/" className="button button--outline button--add go-back-btn">
                  
                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
					</div>

)}