import React, { useEffect, useState } from 'react'
import './Card.css'
import { assets} from "../../assets/assets.js"
import { getUser } from '../../apiHandle/index.jsx'




const Card = () => {
  const [data,setData]=useState();
    useEffect(()=>{
       getUser().then((posts)=>{
        setData(posts)
        
      })
      
      
    },[])
 
  return (
    <>
    {data ?data.map((e)=>
      <> <div className='card'>
      <div className="avatar">
        <img src={"https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png"} alt="Avatar image" />
      </div>
      <h3 className='card-name'>{e.name}</h3>
     
      <div className="message">
        <div>
          <img src={assets.mail_icon} alt="" />
          </div>
          <div className='card-address'>
          <p >{e.address.street} </p>
          </div>
          </div>
      <div className="phone">
        <div>
          <img src={assets.call_icon} alt="" />
          </div>
          <div className='card-mobile'>
          <p >{e.phone}  </p>
          </div>
          </div>
          <div className="socialmedia">
        <div>
          <img src={assets.link_icon} alt="" />
          </div>
          <div className='card-linkaddress'>
          <p >{e.website}  </p>
          </div>
          </div>
        <div className='card-icon'>
      <img src={assets.like_icon} alt="" />
      <img src={assets.edit_icon} alt="" />
      <img src={assets.delete_icon} alt="" />
      </div>
    </div></>)
      :<p> no data </p>}
    </>
    
  )
}

export default Card
