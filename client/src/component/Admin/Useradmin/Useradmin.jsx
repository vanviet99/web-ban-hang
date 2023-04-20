import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './useradmin.css'
function Useradmin() {
  return (
   <div className="useradmin_table">
    <div class="box">
  <div class="container-4">
      <input type="search" id="search" placeholder="Search by name" />
    	<button class="icon"><i class="fa fa-search"></i></button>
  </div>
  </div>
     <Table striped bordered hover size="sm" className='useradmin-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Password</th>
          <th className='text-center'>Acction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className='table_td-acction'> <Button variant="warning">Edit</Button>
          <Button variant="dark">Delete</Button>
          </td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className='table_td-acction'> <Button variant="warning">Edit</Button>
          <Button variant="dark">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
   </div>
  );
}

export default Useradmin;