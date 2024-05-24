import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setHelp,setFavorite,setBasket } from '../../Redux/Features/helpSlicer'
import {Helmet} from "react-helmet";


const Favorite = () => {

    const favorite = useSelector((state) => state.helps.favorite)
    const dispatch = useDispatch()

    return (
        <div className='helpArea myContainer'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Favorite</title>
            </Helmet>
            {favorite&&favorite.map((elem,index)=>{
                return(
                  <div key={index} className='helpMain'>
                <img src={elem.image} alt="" />
                <div >
                <button onClick={()=>dispatch(setFavorite(elem))} className={(favorite.find(item=>item._id==elem._id)) ? "FavButX" : "FavBut"}>Fav</button>
                </div>
                <Link to={`/detail/${elem._id}`}>{elem.title}</Link>
                <p>{elem.content}</p>
            </div>  
                )
            })}
            
            
        </div>
      )
}

export default Favorite