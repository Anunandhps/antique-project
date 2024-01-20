import { Route, Routes } from 'react-router-dom'
import Phome from './Pages/public home/Phome';
import Buyerpage from './Pages/BuyerPage/Buyerpage';
import BuyerReg from './Pages/Registration page/BuyerReg';
import Login from './Pages/Login page/Login';
import Admin from './Pages/Admin page/Admin';
import Adminadditem from './Pages/Admin page/Adminadditem';
import See from './Pages/BuyerPage/See';
import Paintings from './Pages/category/Paintings';
import Furniture from './Pages/category/Furniture';
import Decor from './Pages/category/Decor';
import Instrument from './Pages/category/Instrument';
import Adminviewitem from './Pages/Admin page/Adminviewitem';
import Itemedit from './Pages/item edit/delete/Itemedit';
import Viewcustomer from './Pages/Admin page/Viewcustomer';
import Booking from './Pages/BuyerPage/Booking';





function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Phome/>}></Route>
    <Route path='/Buyer' element={<Buyerpage/>}></Route>
    <Route path='/Reg' element={<BuyerReg/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Admin' element={<Admin/>}></Route>
    <Route path='/Adminadd' element={<Adminadditem/>}></Route>
    <Route path='/see' element={<See/>}></Route>
    <Route path='/paintings' element={<Paintings/>}></Route>
    <Route path='/furniture' element={<Furniture/>}></Route>
    <Route path='/decor' element={<Decor/>}></Route>
    <Route path='/instrument' element={<Instrument/>}></Route>
    <Route path='/adminviewitem' element={<Adminviewitem/>}></Route>
    <Route path='/itemedit/:id' element={<Itemedit/>}></Route>
    <Route path='/viewcustomer' element={<Viewcustomer/>}></Route>
    <Route path='/booking/:id' element={<Booking/>}></Route>
    
  
  
    
    

      


    </Routes>
    </>
  );
}
export default App;
