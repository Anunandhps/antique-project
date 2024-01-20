import React from 'react'
import chandlier from "../public home/chandlier png.png"
import monalisa from "../public home/Monalisa.png"
import nego from "../public home/Negotiation.png"
import land from "../public home/landscape-1.png"
import order from "../public home/s1.png"
import delivery from "../public home/Delivery.png"
import facebook from "../public home/facebook.png"
import instagram from "../public home/instagram.png"
import twitter from "../public home/twitter.png"
import youtube from "../public home/youtube.png"
import Navhome from '../../Components/Navbar/Navhome'
import '../public home/Phome.css'


export default function Phome() {



  return (
    <div className='pagebackground'>

      <Navhome />
      {/* --------------------------------------home---------------------------------------- */}
      <section className='home' id='home'>
        <div className='home-text'>
          <h1>Valor.com</h1>
          <h2>Collect <br />Most Unique And Antique Items</h2>
          <a href="/Reg" className='btn'>Register</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/Login" className='btn'>&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</a>

        </div>
        <div className='home-image'>
          <img src={chandlier} alt="" />

        </div>

      </section>
      {/* -------------------------------about us------------------------------------ */}
      <section className='about' id='about'>
        <div className='about-img'>
          <img src={monalisa} alt="" />

        </div>
        <div className='about-text'>
          <span>About Us</span>
          <h2>We Provide Precious <br /> Antique Items</h2>
          <p>Discover the allure of the past with our curated collection of antique and vintage items, including captivating paintings and more. Each piece reflects a bygone era's craftsmanship and sophistication. Whether you're an art connoisseur or seeking a touch of history, our carefully selected antiques and vintage items offer enduring aesthetics and cultural treasures.</p>

        </div>


      </section>

      {/* ------------------------------categories---------------------------- */}

      <section className='cate' id='cate'>
        <div className='heading'>
          <span>Categories</span>
          <h2>Select The Taste Of Yours</h2>
          <br />
        </div>
        <div className='cate-container'>
          <article class="card__article">
            <img src={land} alt="image" class="card__img" />

            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
          </article>


          <article class="card__article">
            <img src={land} alt="image" class="card__img" />

            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
          </article>


          <article class="card__article">
            <img src={land} alt="image" class="card__img" />

            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
          </article>


          <article class="card__article">
            <img src={land} alt="image" class="card__img" />

            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
          </article>





        </div>


      </section>

      {/* ------------------------------------Services------------------------------------ */}

      <section className='service' id='service'>
        <div className='heading'>
          <span>Services</span>
          <h2>We Provide Rarest And Quality Items</h2>
          <div className='service-container'>
            <div className='s-box'>
              <img src={nego} alt="" />
              <h3>Negotiate</h3>
              <p>Negotiate any product on our site, we make sure you get a good deal</p>

            </div>

            <div className='s-box'>
              <img src={order} alt="" />
              <h3>Order</h3>
              <p>Order if your satisfied with the deal, place order with our best and secure payment system</p>

            </div>

            <div className='s-box'>
              <img src={delivery} alt="" />
              <h3>Delivery</h3>
              <p>We have a fastest and responsible delivery system, Get item safely and fastly</p>

            </div>

          </div>

        </div>

     

      </section>

{/* -----------------------------------talk to us--------------------------------- */}

      <section className='cta' >
        <h2>Talk With Us If Theres Any <br />Compliment Or Complaint</h2>
        <a href="" className='btn'>Let's talk</a>
      </section>

{/* ------------------------------------footer---------------------------------------- */}

      <section id='footer'>
        <div className='footer'>
          <div className='main'>
            <div className='col'>
              <h4>Menu Links</h4>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">category</a></li>
                <li><a href="">service</a></li>
                <li><a href="">contact</a></li>
              </ul>

            </div>

            <div className='col'>
              <h4>Our Services</h4>
              <ul>
                <li><a href="">Alloy wheel </a></li>
                <li><a href="">Pet store</a></li>
                <li><a href="">Arts store</a></li>
                <li><a href="">Used Cars</a></li>
                <li><a href="">Food Donation site</a></li>
              </ul>

            </div>

            
            <div className='col'>
              <h4>Information</h4>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Delivery Information</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
              </ul>

            </div>

            
            <div className='col'>
              <h4>Contact Us</h4>
               <div className='socials'>
                <a href=""><i class='bx bxl-facebook' ></i></a>
                <a href=""><i class='bx bxl-instagram' ></i></a>
                <a href=""><i class='bx bxl-twitter' ></i></a>
                <a href=""><i class='bx bxl-youtube' ></i></a>
               </div>

            </div>
          

          </div>

        </div>


      </section>



    </div>
  )
}
