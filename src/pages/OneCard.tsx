import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectGoods } from "../redux/slices/goodsSlice"
import { useActions } from "../useHooks"



export const OneCard: React.FC = () =>  { 
  const {id} = useParams<{id: string}>()
  const navigate = useNavigate()
  const {oneGoods, isLoadingOne} = useSelector(selectGoods)
  const {fetchOneGoods} = useActions()
  
  React.useEffect(() => {
    fetchOneGoods(id)
  },[])

  
  
  if(isLoadingOne === 'error') {
    alert('ТАКОГО КОРМА НЕТУ:(')
    navigate('/')
  }
  if(isLoadingOne) {
    return(
      <h2>Loading...</h2>
    )
  }
  
  
  
  return(
    <div className='OneCard'>   
      <div className='OneCard__Content'>

        <div className='OneCard__img'>
          <img src={oneGoods[0].img || 'https://i.ibb.co/56nyXF7/269-500x500.png'} alt="контент"/>
        </div>

        <div className='OneCard__discription'>
          <h3>{oneGoods[0].name}</h3>
          <p>От {oneGoods[0].prise[0]}руб.</p>
        </div>

      </div>

      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">          
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  )
}