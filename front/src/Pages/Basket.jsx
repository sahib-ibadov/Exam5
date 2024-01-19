import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'

function Basket() {
    const { basket ,decreaseBtn,increase,removeFrombasket} = useContext(Maincontext)
    return (
        <div style={{minHeight:"400px"}}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">decrease</th>
                        <th scope="col">count</th>
                        <th scope="col">increase</th>

                        <th scope="col">totalPrice</th>

                        <th scope="col">delete</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        basket.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="col">{item.product.name}</th>
                                    <th scope="col">{item.product.price}</th>
                                    <th scope="col"><button className='btn btn-warning' onClick={()=>{
                                        decreaseBtn(item)
                                    }}>decrease</button></th>
                                    <th scope="col">{item.count}</th>
                                    <th scope="col"><button className='btn btn-success' onClick={()=>{
                                        increase(item)
                                    }}>increase</button></th>

                                    <th scope="col">{item.totalPrice}</th>

                                    <th scope="col"><button  className='btn btn-danger' onClick={()=>{
                                        removeFrombasket(item)
                                    }}>delete</button></th>

                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
<Toaster/>
        </div>
    )
}

export default Basket
