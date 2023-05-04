import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Pagination } from 'antd';
import './tableadminorder.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Tableadminorder(props) {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/v1/order/getall')
      .then(data => {
        console.log(data.data);
        setData(data.data.reverse())
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const handlechangests=(value,Id)=>{
    axios.post('http://localhost:8000/v1/order/update', {orderId: Id, status: value})
    .then(data => {
      console.log(data.data);
      setData(data.data.reverse())
    })
    .catch(err => {
      console.log(err)
    })
    
    console.log(value,Id);
  }
  return (
    <div className="produtctadmin_table">
      {/* <div class="box">
        <div class="container-4">
          <input type="search" id="search" placeholder="Search by name" />
          <button class="icon"><i class="fa fa-search"></i></button>
        </div>
      </div> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th> Mã đơn hàng</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Người nhận hàng</th>
            <th>Đơn giá</th>
            <th>Ngày lên đơn</th>
            <th>Xác nhận đơn hàng</th>
            <th>Chi tiết đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{value._id}</td>
                <td>{value.phonenumber}</td>
                <td>{value.address}</td>
                <td>{value.username}</td>
                <td>{value.totalprice.toLocaleString('it-IT')} đ</td>
                <td>{ (new Date(value.date)).toLocaleTimeString()} - {(new Date(value.date)).toLocaleDateString()}</td>
                <td className='table_td-acction'>
                  {value.status == 'panding'? <div>
                  <Button  onClick={()=>{handlechangests('xac nhan', value._id)}} variant="success">Xác nhận</Button>
                  <Button onClick={()=>{handlechangests('tu choi', value._id)}} variant="danger">Từ chối</Button>
                  </div>:<div className={value.status == 'xac nhan'? 'statusorder__1': 'statusorder'}>{value.status}</div>}
                </td>
                <td><Link to={`/order/${value.userId._id}/${value._id}`}>Xem chi tiết</Link></td>
              </tr>
            )

          })}

        </tbody>
      </Table>
      <Pagination defaultCurrent={1} total={50} className='pagini_admin' />
    </div>

  );
}

export default Tableadminorder;