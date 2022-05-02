import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetail from './Components/blog/BlogDetail/BlogDetail';
import MainPage from './Components/blog/Mainpage/MainPage';
import Footer from './Components/Footer/Footer';
import Header2 from './Components/header2/Header2';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Orders/Order';
import Checkout from './Components/Products/Checkout/Checkout';
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
                    <Route
                          path='/product/:ProductId'
                          element={<Checkout />}
                    ></Route>

                    <Route path='/blogs' element={<MainPage />} />
                    <Route
                          path='/blog/:blogId'
                          element={<BlogDetail />}
                    ></Route>
              </Routes>
              <Footer />
        </div>
  );
}

export default App;
