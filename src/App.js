import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Mobiles from './components/Products/MobilesData/Mobiles';
import NavBar from './components/Navbar/NavBar';
import Laptops from './components/Products/LaptopsData/Laptops';   
import CartProvider from './components/Cart/CartContextCounter'
import CartProvider1 from './components/Cart/CartContextItems';
import Cart from './components/Cart/Cart';
import Televisions from './components/Products/TelevisionsData/Televisions';
import Smartwatches from './components/Products/SmartWatchesData/SmartWatches';
import Bluetooths from './components/Products/BluetoothsData/Bluetooths';
import PowerBanks from './components/Products/PowerBanksData/PowerBanks'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
function App() {
  return (
    <div className='App'>   
        <Router>    
          <CartProvider>
            <CartProvider1>
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Mobiles' element={<Mobiles />} />
                <Route path='/Laptops' element={<Laptops />} />
                <Route path='/Televisions' element={<Televisions />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/SmartWatches' element={<Smartwatches />} />
                <Route path='/Bluetooths' element={<Bluetooths />} />
                <Route path='/PowerBanks' element={<PowerBanks />} />
                <Route path="/Login" element={<Login />}/>
                <Route path="/Register" element={<Register />}/>
              </Routes>
            </CartProvider1>
          </CartProvider>
        </Router>
    </div>
  );
}
export default App;
