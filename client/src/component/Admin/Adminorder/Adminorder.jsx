import React from 'react'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './adminorder.css'
import Tableadminorder from '../Tableadminorder/Tableadminorder'
import { Orderadmintable } from '../orderadminTable/Orderadmintable'
function Adminorder() {
  return (
    <div>
        {/* <Row>
          <Col lg={12} >
          <Orderadmintable></Orderadmintable>
          </Col>
        </Row> */}
        <Row>
          <Col lg={12} >
          <Tableadminorder></Tableadminorder>
          </Col>
        </Row>
    </div>
   
  )
}

export default Adminorder