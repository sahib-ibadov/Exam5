import React from 'react'
import Header from '../Layout/Header'
import { Outlet  } from "react-router-dom";
import Footer from '../Layout/Footer';

function MainRoot() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

        
      
    </div>
  )
}

export default MainRoot
