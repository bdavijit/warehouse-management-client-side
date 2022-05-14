import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import About from './Components/About/About';
import BlogDetail from './Components/blog/BlogDetail/BlogDetail';
import MainPage from './Components/blog/Mainpage/MainPage';
import Footer from './Components/Footer/Footer';
import Header2 from './Components/header2/Header2';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


import Products from './Components/Products/Product';
import Error from './Components/Error/Error';
import Inventory from './Components/inventory/inventory';
import ManageInventories from './Components/Manage Inventories/ManageInventories';
import AddNew from './Components/AddProduct/AddNew';




function App() {
  return (
        <div className=''>
              <Header2></Header2>
              <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/product' element={<Products />}></Route>
                    <Route
                          path='/inventory/:Id'
                          element={<Inventory />}
                    ></Route>
                    <Route
                          path='/ManageInventories'
                          element={<ManageInventories />}
                    ></Route>
                    <Route path='/Add_new' element={<AddNew />}></Route>

                    <Route path='/blogs' element={<MainPage />} />
                    <Route
                          path='/blog/:blogId'
                          element={<BlogDetail />}
                    ></Route>
                    <Route path='*' element={<Error />} />
              </Routes>
              <Footer />
        </div>
  );
}

export default App;
