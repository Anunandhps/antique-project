import React from 'react'
import "../BuyerPage/Buyerpage.css"
import Navbuyerhome from '../../Components/Navbar/Navbuyerhome'


export default function Buyerpage() {
  return (
    <div className='buyer-page'>
      <Navbuyerhome />

      <div className='row'>
        <div className='col'>
          <h1>Welcome</h1>
          <p>
            Customer, Here you can get any antique item of your taste. <br /> We add new collections every week,
            so stay tuned and excited. <br /> If you're interested in selling any type of antique collection, let us know. 
          </p><br />
          <button type='button' className='btn'>
            Click Here
          </button>
        </div>

        <div className='col'>
          <a href="/paintings"><div className='card card1'>
           <div className='cardp'><h5>Paintings</h5>
            <p>Explore the vast collection of paintings from different centuries</p></div> 
          </div> &nbsp;&nbsp;&nbsp;</a>

         <a href="/furniture"> <div className='card card2'>
            <h5>Jewelry</h5>
            <p>Explore another category with a brief description</p>
          </div></a> <br />   <br />

          <a href="/decor"><div className='card card3'>
            <h5>Decoratives</h5>
            <p>Discover more items in this interesting category</p>
          </div></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <a href="/instrument"><div className='card card4'>
            <h5>Instruments</h5>
            <p>Explore the final category with unique antique items</p>
          </div></a>
        </div>
      </div>

      <section id='footer'>
        <div className='footer'>
          <div className='main'>
            <div className='col2'>
              <h4>Menu Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className='col2'>
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Service 1</a></li>
                <li><a href="#">Service 2</a></li>
                <li><a href="#">Service 3</a></li>
                {/* Add more services as needed */}
              </ul>
            </div>

            <div className='col2'>
              <h4>Information</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className='col2'>
              <h4>Contact Us</h4>
              <div className='socials'>
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
                <a href="#"><i className='bx bxl-youtube'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
