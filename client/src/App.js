import './App.css';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Admin from './component/Admin/Admin';
import Infoproduct from './component/infoProduct/Infoproduct';
import {
  BrowserRouter,
  Routes, Route 
} from "react-router-dom";
import Home from './component/Home/Home';
import BrandProduct from './component/BrandProduct/BrandProduct';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/:id' element={<Infoproduct></Infoproduct>}></Route>
    <Route path='/brand/:brand' element={<BrandProduct></BrandProduct>}></Route>
    <Route path='/admin' element={<Admin></Admin>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
