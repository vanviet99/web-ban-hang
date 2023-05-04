import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Pagination } from 'antd';
import './producttable.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Producttable(props) {
  const listProduct = props.listProduct
const setCheckeditadmproduct = props.setCheckeditadmproduct
function handledelete(Id){
  console.log(Id)
  axios.post("http://localhost:8000/v1/product/delete", {productId: Id})
  .then(value => {
    console.log(value);
    setData(value.data)
  })
  .catch(value => {
    console.log(value);
  })
// props.checkeditadmproduct = false
// console.log(props.checkeditadmproduct)
}

const [data, setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8000/v1/product/getall")
  .then(value => {
    setData(value.data)
  })
  .catch(value => {
    console.log(value);
  })
},[])

let B = listProduct.length > 0 ? listProduct : data

  return (
   <div className="produtctadmin_table">
 {/* <div class="box">
  <div class="container-4">
      <input type="search" id="search" placeholder="Search by name" />
    	<button class="icon"><i class="fa fa-search"></i></button>
  </div> */}
  {/* </div> */}
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Price</th>
          <th>Sale</th>
          <th>Stock</th>
          <th>Thumb</th>
          <th>Brand</th>
          <th>Ratting</th>
          <th>Comment</th>
          <th  className='table_td-acction'>Acction</th>
        </tr>
      </thead>
      <tbody>
        {B?.map((value, index)=>{
          let total = 0
         value.rate?.map(value=> total += value)
         let C = total/value.rate.length
          return(
            <tr>
            <td>{index}</td>
            <td>{value.name}</td>
            <td>{value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
            <td>{value.sale}</td>
            <td>{value.stock}</td>
            <td><img src={value.thumb} alt="" className='product__table__img'/></td>

            <td>{value.brand}</td>
            <td>{C? C.toFixed(1): 0}</td>
            <td>{value.comment.length}</td>
            <td className='table_td-acction'> 
            <Button variant="dark" onClick={()=>{handledelete(value._id)}}>Delete</Button>
            </td>
          </tr>
          )
        })}
      </tbody>
    </Table>
    <Pagination  defaultCurrent={1} total={50} className='pagini_admin' />
   </div>
    
  );
}

export default Producttable;