import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./logo.png";

export default function CopyrightFooter() {
  return (
    <Container className="container" style={{ borderTop: "2px solid #ccc" }}>
      <Row className="row">
        <Col className="col-4 first-square">
          <div>© 2023 Adopt Me</div>
        </Col>
        <Col className="col-4 logo-footer second-square">
          <img src={logo} alt="logo" className="img-fluid" />
        </Col>
        <Col className="col-4 third-square">
          <span>
            <span>
              <a>Kushtet E Sherbimit</a>
              <a>Politikat E Privatesise</a>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
