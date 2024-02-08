import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {

    const[input,setInput]=new useState(
        [
            {
                "item":"",
                "price":"",
                "contact":"",
                "email":""
            }
        ]
    )
    
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
      console.log(input)
      axios.post("http://localhost:3001/api/furniture/add",input).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="success") {
                  alert("Successfully added")
                  setInput(
                    {
                        "item":"",
                        "price":"",
                        "contact":"",
                        "email":""
                    }
                  )
              } else {
                  alert("Something went wrong")
              }
          }
      )
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Item</label>
                            <input type="text" className="form-control" name="item" value={input.item} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name="price" value={input.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Contact</label>
                            <input type="text" className="form-control"name="contact" value={input.contact} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add