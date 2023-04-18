import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Homeadmin from '../Homeadmin/Homeadmin';
import Adminproduct from '../Adminproduct/Adminproduct';
import Adminorder from '../Adminorder/Adminorder';
import './navadmin.css'
function Navadmin() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col lg={2} className='navadmin_menu'>
        <Nav variant="pills" className="flex-column">
          <Nav.Item className='navadmin_link-link' >
            <Nav.Link eventKey="first" className='admin_nav-link'>
            <div class="text-container ">
                <h1>Dashboards</h1>
            </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='navadmin_link-link'>
          <Nav.Link eventKey="second" className='admin_nav-link' >
            <div class="text-container">
                <h1>Order</h1>
            </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='navadmin_link-link'>
          <Nav.Link eventKey="three" className='admin_nav-link'>
            <div class="text-container">
                <h1>Product</h1>
            </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col lg={10} className='navadmin_center'>
        <Tab.Content>
          <Tab.Pane eventKey="first">
          <Homeadmin></Homeadmin>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
             <Adminorder></Adminorder>
          </Tab.Pane>
          <Tab.Pane eventKey="three">
          <Adminproduct></Adminproduct>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
}

export default Navadmin;