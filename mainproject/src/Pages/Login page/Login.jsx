import React from 'react';
import './Login.css'; // Assuming the CSS file is in the same directory
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Login() {

  const navigate=useNavigate()

  const [input,setInput]=useState({
      username:'',
      userpassword:'',
  })

  console.log(input)



  const inputChange=(event)=>{
      const {name,value}=event.target
      setInput({...input,[name]:value})


  }

  const submit=(e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/loginAPIView',input).then((response)=>{


        
        
        
        localStorage.setItem('Login_id',JSON.stringify(response.data.data.login_id))
        localStorage.setItem('userid',JSON.stringify(response.data.data.userid))
        localStorage.setItem('username',JSON.stringify(response.data.data.username))
        localStorage.setItem('userpassword',JSON.stringify(response.data.data.userpassword))
        localStorage.setItem('role',JSON.stringify(response.data.data.role))
        console.log(response);
        console.log(input);


        if(response.data.data.role==='customer'){
            navigate("/Buyer")
            console.log('customer logged successfully')
        }
    
        else if(response.data.data.role==='admin'){
            navigate("/Admin")
            console.log('Admin logged successfully')
        }



    }).catch((error)=>{
        console.log(error.response.data.data);
        toast.error(error.respnse.data.data, {

            position: "top-center",
            autoclose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    })
    
}







  return (
    <div className='bg'>
      <div className='wrapper'>
        <form action=''>
          <h1>LOGIN</h1>

          <div className='input-box'>
            <div className='input-field'>
              <input type='text' placeholder='Username' name='username'  onChange={inputChange} required />
              <i className='bx bxs-user'></i>
            </div>
          </div>

          <div className='input-box'>
            <div className='input-field'>
              <input type='password' placeholder='Password' name='password' onChange={inputChange} required />
              <i className='bx bxs-lock-alt'></i>
            </div>
          </div>

          <label>
            Don't have an account <a href=''>Sign up</a>
          </label>

          <button type='submit' className='bttn' onClick={submit}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
