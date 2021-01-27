import { Col, Row } from "./Grid";

const Layout = ({ children }) => {
  return (
    <Row>
      <Col xs="200px">

      </Col>
      <Col xs="auto">
        {children}
      </Col>
      <Col xs="300px">
        
      </Col>
    </Row>
  )
}

export default Layout;
