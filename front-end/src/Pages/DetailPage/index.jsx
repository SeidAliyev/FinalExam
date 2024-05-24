import React from 'react'
import "./detail.scss"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Detail = () => {
   const { id } = useParams()

   const [mydata, setMydata] = useState([])

   useEffect(() => {
     axios.get(`http://localhost:5000/api/help/${id}`).then((res)=>setMydata(res.data))
   }, [])
   
  return (
    <div className='DetailP myContainer'>
        <img src={mydata.image} alt="" />
        <h3>{mydata.title}</h3>
        <p>{mydata.content}</p>
    </div>
  )
}

export default Detail