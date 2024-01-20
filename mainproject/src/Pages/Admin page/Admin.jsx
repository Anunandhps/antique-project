// import React from 'react'
import '../Admin page/admin.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {

  // ....................customer count.................
  const [state, setState] = useState([])

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/TotalCustomersView').then((response) => {
          console.log(response);
          setState(response.data[0])

      }).catch((error) => { console.log(error); })
  }, [])
  console.log(state,"loooooooooo");



  // ......................items...........................


  const [items, setitems] = useState([])

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/TotalitemsView').then((response) => {
          console.log(response);
          setitems(response.data[0])

      }).catch((error) => { console.log(error); })
  }, [])
  console.log(items,"sddsadsa");

  
  return (
    <div className='adminbody'>
      <div className='container'>
        <nav className='navi'>
          <ul>
            <li><a href="" className='a logo' >
              <img src="" alt="" />
              <span className='nav-item'>Dashboard</span>
              </a></li>
            <li><a href="/" className='a'>
            <i class='fas  bx bxs-home'></i>
              <span className='nav-item'>Home</span>
              </a></li>
              <li><a href="/viewcustomer" className='a'>
              <i className='fas bx bxs-user'></i>
              <span className='nav-item'>Customers</span>
              </a></li>
              <li><a href="/Adminadd" className='a'>
              <i class='fas bx bxs-message-square-add'></i>
              <span className='nav-item'>Add Item</span>
              </a></li>
              <li><a href="/adminviewitem" className='a'>
              <i class='fas bx bx-shopping-bag'></i>
              <span className='nav-item'>View items</span>
              </a></li>
              <li><a href="" className='a'>
              <i className='fas bx bx-task'></i>
              <span className='nav-item'>tasks</span>
              </a></li>
              <li><a href="" className='a'>
              <i className='fas bx bxs-cog'></i>
              <span className='nav-item'>settings</span>
              </a></li>
              <li><a href="" className='a'>
              <i className='fas bx bxs-help-circle'></i>
              <span className='nav-item'>help</span>
              </a></li>
              <li><a href="" className='a  logout'>
              <i className='fas bx bx-log-out'></i>
              <span className='nav-item'>Logout</span>
              </a></li>
          </ul>
        </nav>

        <div className='col-div-3'>
        <a href="/viewcustomer">
          <div className='box lo'>
            <p>{state}<br /><span>Customers</span></p>
            <i class='bx bxs-user-circle box-icon' ></i>
          </div>
          </a>
        </div>

       
        <div className='col-div-3'>
        <a href="/adminviewitem">
          <div className='box la'>
            <p>{items}<br /><span>Items</span></p>
            <i class='bx bxs-shopping-bag box-icon'></i>
          </div>
          </a>
        </div>

      
        <div className='col-div-3'>
        <a href="">
          <div className='box li'>
            <p>67 <br /><span>Customers</span></p>
            <i class='bx bxs-user-circle box-icon' ></i>
          </div>
          </a>
        </div>


      </div>
        

    </div>
  )
}
