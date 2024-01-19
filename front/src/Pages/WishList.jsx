import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'

function WishList() {
    const { wishlist,removeFromwishlist } = useContext(Maincontext)
    return (
        <div className='container' style={{minHeight:"600px"}} >
            <div className="row">
                {
                    wishlist.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4 mr-1" key={index}>
                                <div class="card" style={{ width: "18rem;" }}>
                                    <img src={item.image} class="card-img-top" alt="..." /> 
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.price}</p>
                                        <button className='btn btn-success' onClick={()=>{
                                            removeFromwishlist(item)
                                        }}>delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

<Toaster/>
        </div>
    )
}

export default WishList
