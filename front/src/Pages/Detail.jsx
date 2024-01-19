import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {
    const [detail,SetDetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4343/wine/${id}`).then(res=>{
            SetDetail(res.data)
        })
    })
 return(
    <div>
        {detail.image}
      
    </div>
 )
}

export default Detail
