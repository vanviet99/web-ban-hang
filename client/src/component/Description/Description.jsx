import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './description.css'
function Description() {
  return (
    <Container fluid>
            <Container>
              <div className="description">
                <div className="description_heading">
                    <h3>MÔ TẢ CHI TIẾT</h3>
                </div>
                <Row className='description-title'>
                  <Col lg={3}>  
                    <p>MÔ TẢ</p>
                  </Col>
                  <Col lg={9}>
                  <p>Phong cách Âu Mỹ đơn giản không làm mất đi vẻ thanh lịch quyến rũ của người phụ nữ, túi Shoulder Bag móc treo rua rua DFJL chất liệu da PU cao cấp, thiết kế tiện dụng thích hợp sử dụng khi đi làm, đi chơi hay shopping sẽ là xu hướng hót nhất xuân hè này<br></br>
                        – Túi Shoulder Bag móc treo rua rua DFJL phong cách Âu Mỹ đơn giản không làm mất đi vẻ thanh lịch quyến rũ của người phụ nữ thích hợp sử dụng khi đi làm, đi chơi hay shopping sẽ là xu hướng hót nhất xuân hè này.<br></br>
                        – Chất liệu PU cao cấp rất mềm, bề mặt bóng sáng, vân da nổi rõ kết hợp cùng công nghệ may hiện đại đem đến cho khách hàng sản phẩm hoàn hảo cao cấp.<br></br>
                        – Móc treo da tua rua có thể tháo rời tạo điểm nhấn cho chiếc túi.<br></br>
                        – Dây đeo khóa bấm có thể tháo rời; dây đeo dài được trang bị thêm cho bạn sử dụng theo những phong cách khác nhau.</p>
                  </Col>
                </Row>
              </div>
            </Container>
        </Container>
  )
}

export default Description