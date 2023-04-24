
import Nav from 'react-bootstrap/Nav';
import { AiOutlineMore } from "react-icons/ai";
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
import { BsCartCheck, BsFillFilePersonFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import OffCanvasExample from '../offcanvas/Offcanvas';
import Myinfo from '../myinfo/Myinfo'
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';


function Navbarr(props) {
  const [userr, setUserr] = useState('')
  const listbrnad = props.listbrnad
  const dataCart = props.dataCart
  const [amount, setamount] = useState(0)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : false
    setUserr(user.username)
  }, [])

  let userId = JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user"))._id : ''
  useEffect(() => {
    axios.get(`http://localhost:8000/v1/cart/get/${userId}`)
      .then(value => {
        setamount(value.data[0].list.length)
      })
      .catch(value => {
        console.log(value);
      })

  }, [dataCart])
  const nav = useNavigate()
  function logout() {
    localStorage.removeItem("user")
    nav('/')
  }
  const handleclickBrand = (value) => {
    nav(`/brand/${value}`)
  }

  const handleToDashboard =()=>{
    nav(`/order/${userId}`)
  }

  return (



    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='test' fixed="top" >
      <Myinfo></Myinfo>
      <Container className='th'>
        <Navbar.Brand><div class="wrapper">
          <div class="bg"> VT Shop </div>
          <div class="fg">  VT Shop  </div>
        </div></Navbar.Brand>
        <Navbar.Brand >  <input type="search" placeholder='Search by name product' className='nav_search' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant="pills" defaultActiveKey="/">
            <Link to='/' className='nav_link'>
              <Nav.Link href="/" eventKey="link-1">Trang Chủ</Nav.Link>
            </Link>
            {listbrnad?.map(value => {
              if (value !== undefined) {
                return (
                  <Link onClick={() => { handleclickBrand(value) }} className='nav_link'> <Nav.Link eventKey="link-5">{value}</Nav.Link>
                  </Link>
                )
              }
            })}

          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>{userr ? <div onClick={handleToDashboard} className='dashboardUser'><p>{userr}</p><a href='' className='nav_link white' onClick={() => logout()}>Logout</a></div> : <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='/login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
        {['end'].map((placement, idx) => (
          <OffCanvasExample setamount={setamount} dataCart={dataCart} key={idx} placement={placement} name={<Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span className='amount__cart'>{amount}</span></Navbar.Brand>} />
        ))}

      </Container>
    </Navbar>

    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
    //     <Navbar.Brand > </Navbar.Brand>
    //     <Navbar.Brand ><input type="search" placeholder='Search by name product' className='nav_search'/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto" variant="pills" defaultActiveKey="/">
    //         <Link to='/' className='nav_link'>
    //         <Nav.Link  href="/" eventKey="link-1">Trang Chủ</Nav.Link>
    //         </Link>
    //         <Link className='nav_link'> <Nav.Link  eventKey="link-5">Túi Sách</Nav.Link>
    //         </Link>
    //        <Link className='nav_link' ><Nav.Link eventKey="link-2" >Túi Nữ Cầm tay</Nav.Link></Link>
    //         <Link className='nav_link' ><Nav.Link eventKey="link-3">Túi Kamicy</Nav.Link></Link>
    //        <Link className='nav_link' ><Nav.Link eventKey="link-4" >VÍ Da</Nav.Link></Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Brand>{userr ? <div>{userr}<a href=''className='nav_link white' onClick={()=>logout()}>Logout</a></div>: <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
    //     {[ 'end'].map((placement, idx) => (
    //     <OffCanvasExample key={idx} placement={placement} name={<Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span className='amount__cart'>0</span></Navbar.Brand>} />
    //   ))}
    // </Navbar>
  );
}

export default Navbarr;