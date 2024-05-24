import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decBasket,incBasket,setBasket } from '../../Redux/Features/helpSlicer'

const Basket = () => {
    const basket = useSelector((state) => state.helps.basket)
  const dispatch = useDispatch()
    return (
        <div className='helpArea myContainer'>
            <div>
                <p>
                    Total Basket:
                </p>
                </div>
            {basket&&basket.map((elem,index)=>{
                return(
                  <div key={index} className='helpMain'>
                <img src={elem.image} alt="" />
                <div >
                  <button className='CartBut' onClick={()=>dispatch(decBasket(elem))}>-</button>
                  <button className='CartBut' onClick={()=>dispatch(incBasket(elem))}>+</button>
                </div>
                <p>Quantity : {elem.count}</p>
                <Link to={`/detail/${elem._id}`}>{elem.title}</Link>
                <p>{elem.content}</p>
            </div>  
                )
            })}
            
            
        </div>
      )
}

export default Basket