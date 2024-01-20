import React, { useState } from 'react'
import "../Navbar/Navhome.css"
// import logo from "../Navbar/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function Navhome() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log("kn");

    };

    return (
        <div className='nbody'>



<nav className='nav'>
                <div className='flex-container'>
                    {/* <img src={logo} alt="Logo" /> */}
                    <button className="hamburger-button" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className={`navcontx ${menuOpen ? "active" : ""}`}>
                        <li  className='flex-item'><a href="#home">Home</a></li>
                        <li className='flex-item'><a href="#about">About</a></li>
                        <li className='flex-item'><a href="#cate">Catagories</a></li>
                        <li className='flex-item'><a href="#service">Services</a></li>
                        <li className='flex-item'><a href="#footer">Contact</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
