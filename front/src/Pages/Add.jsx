import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Maincontext from '../Context/context';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";

function Add() {
  const {setData,data,deleteFromData,handleAZ,handleZA}=useContext(Maincontext)
  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      price: '',
      image:'',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      desc: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      price: Yup.string()
        // .max(30, 'Must be 20 characters or less')
        .required('Required'),
        image: Yup.string()
        // .max(30, 'Must be 20 characters or less')
        .required(' image required Required'),
      
    }),
    onSubmit: values => {
      axios.post("http://localhost:4343/wine/",values).then(res=>{
        setData([...data,res.data])
      })
      formik.resetForm()
    },
  });
  return (
    
    <div style={{marginTop:"30px", minHeight:"500px"}}>
      <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ADD</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    <div style={{display:"flex",justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <form onSubmit={formik.handleSubmit}>
       {/* <label htmlFor="firstName">name</label> */}
      
 
       <label htmlFor="name"> name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
 
       <label htmlFor="desc">desc</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.desc}
       />
         {formik.touched.desc && formik.errors.desc ? (
         <div>{formik.errors.desc}</div>
       ) : null}
        <label htmlFor="price">price</label>
       <input
         id="price"
         name="price"
         type="Number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
         {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
        <label htmlFor="image">image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
    </div>
    <div style={{marginTop:"30px"}}>
      <button onClick={()=>{
        handleAZ()
      }} className='btn btn-danger'>A-Z</button>
        <button onClick={()=>{
        handleZA()
      }} className='btn btn-success'>A-Z</button>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">desc</th>
      <th scope="col">price</th>
      <th>delete</th>
      
    </tr>
  </thead>

  <tbody>

    {data.map((item,index)=>{
        return(
            <tr>
            <th scope="row">{item._id}</th>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td><button onClick={()=>{
              deleteFromData(item._id)
            }}>delete</button></td>
          </tr>
        )
    })}
  </tbody>
  </table>
    </div>
      <Toaster/>
    </div>
  )
}

export default Add

