import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminChart from '../AdminChart/AdminChart';
function Adminproduct() {
  return (
    <Row>
      <Col lg={4}>
        <AdminChart></AdminChart>
      </Col>
      <Col lg={8}>
      </Col>
    </Row>
  )
}

export default Adminproduct