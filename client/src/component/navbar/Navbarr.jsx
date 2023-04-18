import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import  './nav.css'
import { BsCartCheck,BsFillFilePersonFill} from "react-icons/bs";
import {  useEffect, useState } from 'react';
import OffCanvasExample from '../offcanvas/Offcanvas';
function Navbarr() {  
  const [userr,setUserr] = useState('')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : false
    setUserr(user.username)
  }, [])
 
  function logout(){
    localStorage.removeItem("user")
  }

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
        <Navbar.Brand ><input type="search" placeholder='Search by name product' className='nav_search'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant="pills" defaultActiveKey="/">
            <Link to='/' className='nav_link'>
            <Nav.Link  href="/" eventKey="link-1">Trang Chủ</Nav.Link>
            </Link>
            <Link className='nav_link'> <Nav.Link  eventKey="link-5">Túi Sách</Nav.Link>
            </Link>
           <Link className='nav_link' ><Nav.Link eventKey="link-2" >Túi Nữ Cầm tay</Nav.Link></Link>
            <Link className='nav_link' ><Nav.Link eventKey="link-3">Túi Kamicy</Nav.Link></Link>
           <Link className='nav_link' ><Nav.Link eventKey="link-4" >VÍ Da</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>{userr ? <div>{userr}<a href=''className='nav_link white' onClick={()=>logout()}>Logout</a></div>: <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
        {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={<Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span className='amount__cart'>0</span></Navbar.Brand>} />
      ))}
    </Navbar>
  );
}

export default Navbarr;