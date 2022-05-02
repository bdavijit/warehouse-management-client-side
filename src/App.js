import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Heder';
import Header2 from './Components/header2/Header2';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import Order from './Components/Orders/Order';
import Products from './Components/Products/Product';
import Register from './Components/Register/Register';


function App() {
  return (
        <div className=''>
              <Header2></Header2>
              <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Orders' element={<Order />}></Route>
                    <Route path='/Register' element={<Register />}></Route>
                    <Route path='/product' element={<Products />}></Route>
              </Routes>
        </div>
  );
}

export default App;
