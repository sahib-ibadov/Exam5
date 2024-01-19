import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Link } from 'react-router-dom'
import "./Card.scss"
import toast, { Toaster } from 'react-hot-toast';

function Card({item}) {
    const {addtoWishlist,addtoBasket}=useContext(Maincontext)
  return (
    <div className='col-lg-4 col-md-6 mb-3 mr-1'>
      <div class="card" style={{width: "18rem;"}}>
<div className='sagol'>  <img src={item.image} class="card-img-top" alt="..."/></div>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.price} $$</p>
   <div><button  className='btn btn-warning' onClick={()=>{
    addtoWishlist(item)
   }}><i class="fa-solid fa-heart"></i></button><button className='btn btn-danger' onClick={()=>{
    addtoBasket(item)
   }}><i class="fa-solid fa-basket-shopping"></i></button>
  <button className='btn btn-success' ><Link style={{textDecoration:"none", color:"white"}} to={`/${item._id}`}> #</Link></button>
   
   </div>
  </div>
</div>
<Toaster/>
    </div>
  )
}

export default Card
