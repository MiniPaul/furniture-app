import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {

    const[data,setdata]=new useState([])
    const getdata=()=>{
       axios.get("http://localhost:3001/api/furniture/viewall").then(
           (response)=>{
               setdata(response.data)
           }
       )
    }
    useState(()=>{getdata()},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Contact no</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    
    {
        data.map(
            (value,index)=>{
                return <tr>
                <td>{value.item}</td>
                <td>{value.price}</td>
                <td>{value.contact}</td>
                <td>{value.email}</td>
              </tr>
            }
        )
    }

  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View