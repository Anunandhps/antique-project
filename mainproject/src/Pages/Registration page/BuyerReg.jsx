// import React from 'react'
import '../Registration page/BuyerReg.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';


export default function BuyerReg() {
  const navigate = useNavigate();
  const [input, setinput] = useState({
      fullname: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmpassword: '',
      // role: '',


  })

  const [oops,setoops] = useState({})
  const [issubmit,setsubmit] = useState(false)    
  // const [isverified,setverified] = useState(false)    


  const validate=(values)=>   {
      var error={}
      if(!values.fullname){
          error.fullname= 'name cannot be null'
      }

      if(!values.username){
          error.username= 'place cannot be null'
      }

      if(!values.email){
          error.email= 'phone cannot be null'
      }

      if(!values.phone){
          error.phone= 'username cannot be null'
      }

      if(!values.password){
          error.password= 'password cannot be null'
      }

      if(!values.confirmpassword){
          error.confirmpassword= 'password cannot be null'
      }
      return error

    }

  



    console.log(input)

    const inputchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setinput({ ...input, [name]: value })


    }

  
    const dataadd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setoops(validate(input))
        setsubmit(true)
        console.log("test1")
        
        // if(Object.keys(oops).length===0 && issubmit){

          console.log("test2")
            
        axios.post('http://127.0.0.1:8000/api/customerregisterAPIView', input).then((res) => {
            console.log("test3")
            navigate("/Login")


        }).catch((err) => {
            console.log(err.response.data.message);
            toast(err.response.data.message, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        })
        console.log(oops)
            
        // }




    }

  return (



    <div id="buyer-reg-container" className='buyer-reg-bg'>
      <ToastContainer/>
      <div className='buyer-reg-wrapper'>
        <div>
          <h1>Registration</h1>

          <div className='buyer-reg-input-box'>
            <div className='buyer-reg-input-field'>
              <input type="text" placeholder='Full Name' name='fullname'  onChange={inputchange} onClick={()=>{setoops({...oops,'fullname':''})}} required/>
              <i className='bx bxs-user'></i>
            </div>
            <div className='buyer-reg-input-field'>
              <input type="text" placeholder='Username' name='username'  onChange={inputchange} onClick={()=>{setoops({...oops,'username':''})}} required/>
              <i className='bx bxs-user'></i>
            </div>
          </div>

          <div className='buyer-reg-input-box'>
            <div className='buyer-reg-input-field'>
              <input type="email" placeholder='Email' name='email'  onChange={inputchange} onClick={()=>{setoops({...oops,'email':''})}} required/>
              <i className='bx bxs-envelope'></i>
            </div>
            <div className='buyer-reg-input-field'>
              <input type="number" placeholder='Phone number' name='phone'  onChange={inputchange} onClick={()=>{setoops({...oops,'phone':''})}} required/>
              <i className='bx bxs-phone'></i>
            </div>
          </div>

          <div className='buyer-reg-input-box'>
            <div className='buyer-reg-input-field'>
              <input type="password" placeholder='Password' name='password'  onChange={inputchange} onClick={()=>{setoops({...oops,'password':''})}} required/>
              <i className='bx bxs-lock-alt' ></i>
            </div>
            <div className='buyer-reg-input-field'>
              <input type="password" placeholder='Confirm Password' name='confirmpassword'  onChange={inputchange} onClick={()=>{setoops({...oops,'confirmpassword':''})}} required/>
              <i className='bx bxs-lock-alt' ></i>
            </div>
          </div>

          <label><input type="checkbox" />Given information are correct and true</label>

          <button type='button' className='buyer-reg-bttn' onClick={(event)=>dataadd(event)}>Register</button>
        </div>
      </div>
    </div>
  )
}
