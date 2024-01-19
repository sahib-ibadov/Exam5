import React, { useContext, useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios'
import ROUTES from './index.root';
import Maincontext from './Context/context';
import toast from 'react-hot-toast';
// import WishList from './Pages/WishList';
const router = createBrowserRouter(ROUTES)
function App() {
  const [data, setData] = useState([])
  const [wishlist, setWishList] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])
  const [basket, setBasket] = useState(localStorage.getItem("basketItem") ? JSON.parse(localStorage.getItem("basketItem")) : [])
const [search,setSearct]=useState([])

  const addtoWishlist = (product) => {
    const target = wishlist.find(item => item._id == product._id)
    if (target) {
      toast.error("wishlistde movcuddur")
    }
    else {
      setWishList([...wishlist, product])
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]))
      toast.success("added data to wishList")
    }


  }
  const removeFromwishlist = (product) => {
    const target = wishlist.find(item => item._id == product._id)
    wishlist.splice(wishlist.indexOf(target), 1)
    setWishList([...wishlist])
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]))
    toast.success("deleted data from wishList")
  }
  const addtoBasket = (product) => {
    const target = basket.find(item => item.product._id == product._id)
    if (target) {
      target.count += 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basketItem", JSON.stringify([...basket]))
      toast.success("added data to basket")
    }
    else {
      const BasketProduct = {
        id: product._id,
        product: product,
        count: 1,
        totalPrice: product.price 
      }
      setBasket([...basket, BasketProduct])
      localStorage.setItem("basketItem", JSON.stringify([...basket, BasketProduct]))
    }
  }
  const decreaseBtn=(product)=>{
    const target = basket.find(item => item.id == product.id)
    if(target.count>1){
      target.count -=1
      target.totalPrice=target.product.price*target.count
      setBasket([...basket])
      localStorage.setItem("basketItem",JSON.stringify([...basket]))
    }

  }
  const increase=(product)=>{
    const target = basket.find(item => item.id == product.id)
   
      target.count +=1
      target.totalPrice=target.product.price*target.count
      setBasket([...basket])
      localStorage.setItem("basketItem",JSON.stringify([...basket]))
    

  }
  const removeFrombasket=(product)=>{
    const target=basket.find(item=>item.id==product.id)
    basket.splice(basket.indexOf(target),1)
    setBasket([...basket])
    localStorage.setItem("basketItem",JSON.stringify([...basket]))
    toast.success("deleted data from wishlist")
  }
  const handleSearch=(searchValue)=>{
    if(searchValue==''){
      setData([...search])
    }else{
      setData([...data.filter(item=>item.name.toLowerCase().trim().includes(searchValue))])
    }
  }
  const handleSortPrice=()=>{
    const target=data.sort((a,b)=>b.price-a.price)
    setData([...target])
    toast.success("sorted data")
  }
  const handleAZ=()=>{
   setData([... data.sort((a,b)=>a.name.localeCompare(b.name))])
   toast.success("sorted data")
  }
  const handleZA=()=>{
    setData([... data.sort((a,b)=>b.name.localeCompare(a.name))])
    toast.success("sorted data")
   }
  const deleteFromData=(id)=>{
    axios.delete(`http://localhost:4343/wine/${id}`).then(res=>{
      const target=data.find(item=>item._id===id)
      data.splice(data.indexOf(target),1)
      setData([...data])
      toast.success("deleted data from api")
    })
  }



  useEffect(() => {
    axios.get("http://localhost:4343/wine/").then(res => {
      console.log(res.data)
      setData(res.data)
      setSearct(res.data)
    })
  }, [])
  const values = {
    data,
    addtoWishlist,
    wishlist,
    removeFromwishlist,
    addtoBasket,
    basket,
    decreaseBtn,
    increase,
    removeFrombasket,
    handleSearch,
    handleSortPrice,
    handleAZ,
    setData,
    deleteFromData,
    handleZA

  }
  return (

    <div>
      <Maincontext.Provider value={values}>

        <RouterProvider router={router} />
      </Maincontext.Provider>
    </div>
  )
}

export default App

