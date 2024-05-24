import React from 'react'
import { useEffect } from 'react'
import "./help.scss"
import { useSelector, useDispatch } from 'react-redux'
import { setHelp,setFavorite,setBasket,AZHelp,ZAHelp } from '../../../Redux/Features/helpSlicer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";

const Help = () => {

  const help = useSelector((state) => state.helps.help)
  const favorite = useSelector((state) => state.helps.favorite)
  const dispatch = useDispatch()

 useEffect(() => {
   axios.get("http://localhost:5000/api/help").then((res)=>dispatch(setHelp(res.data)))
 }, [])
 

  return (
    <>
    <div className='myContainer buttdiv'>
      <button onClick={()=>dispatch(AZHelp())} className='sortBut'>A-Z</button>
    <button onClick={()=>dispatch(ZAHelp())} className='sortBut'>Z-A</button>
    </div>
    
    <div className='helpArea myContainer'>
        {help&&help.map((elem,index)=>{
            return(
              <div key={index} className='helpMain'>
            <img src={elem.image} alt="" />
            <div >
              <button className='CartBut' onClick={()=>dispatch(setBasket(elem))}>Add Basket</button>
            <button onClick={()=>dispatch(setFavorite(elem))} className={(favorite.find(item=>item._id==elem._id)) ? "FavButX" : "FavBut"}>Fav</button>
            </div>
            <Link to={`/detail/${elem._id}`}>{elem.title}</Link>
            <p>{elem.content}</p>
        </div>  
            )
        })}
    </div>
    </>
  )
}

export default Help