import './App.css';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Admin from './component/Admin/Admin';
import Infoproduct from './component/infoProduct/Infoproduct';
import Useradmin from './component/Admin/Useradmin/Useradmin';
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './component/Home/Home';
import BrandProduct from './component/BrandProduct/BrandProduct';
import Cart from './component/cart/Cart';
import Pay from './component/pay/Pay';
import Myorder from './component/myorder/Myorder';
import DescOrder from './component/descOrder/DescOrder';
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
        <Route path='/cart/:cartId' element={<Cart></Cart>}></Route>
        <Route path='/pay/:userId' element={<Pay></Pay>}></Route>
        <Route path='/order/:userIdOrder' element={<Myorder></Myorder>}></Route>
        <Route path='/order/:userIdOrder/:orderId' element={<DescOrder></DescOrder>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
