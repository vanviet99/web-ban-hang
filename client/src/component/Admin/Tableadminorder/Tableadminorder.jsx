import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Pagination } from 'antd';
import './tableadminorder.css'

function Tableadminorder(props) {
  return (
   <div className="produtctadmin_table">
 <div class="box">
  <div class="container-4">
      <input type="search" id="search" placeholder="Search by name" />
    	<button class="icon"><i class="fa fa-search"></i></button>
  </div>
  </div>
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Quantity</th>
          <th>Sale</th>
          <th>Stock</th>
          <th>Thumb</th>
          <th>Brand</th>
          <th>Ratting</th>
          <th>Command</th>
          <th>favourite</th>
          <th  className='table_td-acction'>Acction</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>2</td>
          <td>Jacob</td>
          <td className='table_td-acction'> <Button variant="warning">Edit</Button>
          <Button variant="dark">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>2</td>
          <td>Jacob</td>
          <td className='table_td-acction'> <Button variant="warning" >Edit</Button>
          <Button variant="dark">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
    <Pagination defaultCurrent={1} total={50} className='pagini_admin' />
   </div>
    
  );
}

export default Tableadminorder;