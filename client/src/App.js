import './App.css';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import {
  BrowserRouter,
  Routes, Route 
} from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
