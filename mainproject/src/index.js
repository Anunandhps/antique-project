import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navhome from './Components/Navbar/Navhome';
import Phome from './Pages/public home/Phome';
import BuyerReg from './Pages/Registration page/BuyerReg';
import Login from './Pages/Login page/Login';
import Navbuyerhome from './Components/Navbar/Navbuyerhome';
import Buyerpage from './Pages/BuyerPage/Buyerpage';
import Admin from './Pages/Admin page/Admin';

import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <BrowserRouter>
    <App />
    </BrowserRouter>



    {/* <Phome/> */}
    {/* <BuyerReg/> */}
    {/* <Login/> */}
    {/* <Buyerpage/> */}
    {/* <Navbuyerhome/> */}
    {/* <Admin/>       */}
    {/* <Navhome/> */}

    
    
    
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
