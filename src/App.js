import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Heder';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
        <div className='App'>
          <Header></Header>
              <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
              </Routes>
        </div>
  );
}

export default App;
