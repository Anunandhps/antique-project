import React, { useEffect } from 'react'
import { useState } from 'react'
import '../BuyerPage/booking.css'
// import dogi from '../buy/dog.jpg'
// import Counter from '../../../components/Counter'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


export default function Booking() {
  const { id } = useParams();
  const [form, setform] = useState({})
  const [count, setcount] = useState(1)
  const userid = localStorage.getItem("userid")

  const itemid = id;
  console.log("hey bro userid", userid);
  console.log("hey bro itemid", itemid);
  console.log(count);
  const [bkstat, setbkstat] = useState("")



  // const [bookdata, setbookdata] = useState({
  //   userid: userid,
  //   sellerid: null,
  //   petid: petid,
  //   quantity: count,
  // })
  const clearBkstatToast = () => {
    toast.dismiss("bkstat-toast"); // Dismiss toast with the ID "bkstat-toast"
  };
const navigate=useNavigate()
  const booking = (e) => {
    e.preventDefault(); 
    const bookdata = {
      userid: userid,
      itemid: id,
      quantity: count,
    };
    
    axios.post("http://127.0.0.1:8000/api/bookingAPIView", bookdata)
      .then((res) => {
        console.log("item booking has been added successfully");
        toast.success("booking has been successfull")
        console.log(res);
        navigate("")
      })
      .catch((err) => {
        console.log(err.response.data.message);
        const errorMessage = err.response.data.message;
        setbkstat(errorMessage);
        toast.dismiss("bkstat-toast"); 
  
        // Use setTimeout to display the error toast message after a short delay
        setTimeout(() => {
          toast.error(errorMessage, { id: "bkstat-toast" });
        }, 100); 
      });
    console.log(bookdata);
  };
  



useEffect(() => {
  axios.get(`http://127.0.0.1:8000/api/singleitemview/${id}`).then((response) => {
    console.log("single petview", response);
    setform(response.data.data)
    // setform(response.data.data);
    // console.log(bookdata);
   
    // console.log(form);

  }).catch((err) => {
    console.log(err);
  })
}, [])
return (
  <div>
<Toaster />
    <div className="payment-screen">
      <div className="payment-card">
        <div className="card-left">
          <img
            src={`/antiquestore/${form.image}`}
            className="product-image"
            alt="Shoes"
          />
          <br />
          <h1>{form.name}</h1>
          <p>{form.price}</p>
          <p>{form.description} </p>
        </div>
        <div className="card-right">
          <form action="">

            <h2>Book</h2>
            <hr />
            <p>{form.name}</p>
            <hr />
            <p> {form.price}</p>

            <p>{form.description}</p>
            <hr />
           
{/* 
            <p> Quantity </p>
            <center><Counter setcount={setcount} maxQuantity={form.quantity} /></center>
            
            <br /> */}
            <span className='bstat'>{bkstat}</span>

            <button type="submit" className="checkout-button" onClick={booking} >book</button>
          </form>
        </div>
      </div>
    </div>


  </div>

)
  }