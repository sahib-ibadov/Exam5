import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import Card from './Card'
import "./Card.scss"
import { Toaster } from 'react-hot-toast'
function Cards() {
    const {data,handleSearch,handleSortPrice,handleAZ}=useContext(Maincontext)
  return (
    <div className='container'>
       <div className='cards__element'>
       <input type="text" placeholder='search' onChange={(e)=>{
            handleSearch(e.target.value)
        }} />
        <button onClick={()=>{
            handleSortPrice()
        }}> filter by Price</button>
        <button onClick={()=>{
            handleAZ()
        }}>fnznnjnn</button>
       </div>
      <div className="row">
        {
            data.map((item,index)=>{
                return(<Card item={item} key={index} />)
            })
        }
      </div>
      <Toaster/>
    </div>
  )
}

export default Cards
