import clsx from "clsx"
import { useActions } from "../../useHooks"

type CartProps = {
  id: string, 
  name: string, 
  price: number, 
  tastes: string, 
  size: string, 
  img: string,
  count: number
}

export const CartCard: React.FC<CartProps> = ({
  name, count, size, tastes, img, id, price
}) => {
  const {deleteAll, addOne, deleteOne} = useActions()

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      deleteAll({id, tastes, size})
    }
  }

  return (
    <div className="cart__item">
								<div className="cart__item-img">
									<img
										className="pizza-block__image"
										src={img}
										alt="Dog"
									/>
								</div>
								<div className="cart__item-info">
									<h3>{name}</h3>
									<p>{`${tastes}, ${size} кг`}</p>
								</div>
								<div className="cart__item-count">

                  <button 
                    disabled={count === 1}
                    className={clsx("button button--outline button--circle cart__item-count-minus", 
                  {'cart__item-count-minus--disabled': count === 1})}

                    onClick={() => deleteOne({id, tastes, size})}>
										-
									</button>

									<b>{count}</b>
									<button className="button button--outline button--circle cart__item-count-plus"
                    onClick={() => addOne({id, tastes, size})}>
										+
									</button>
								</div>
								<div className="cart__item-price">
									<b>{price * count}</b>
								</div>
								<div className="cart__item-remove">
									<div className="button button--outline button--circle"
                    onClick={() => onClickRemove()}>
										X
									</div>
								</div>
							</div>
  )
}