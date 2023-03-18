import { Container, Row, Col } from "react-bootstrap";
import facebook from "../FooterSubcribe/facebook.png";
import twitter from "../FooterSubcribe/twitter.png";
import instagram from "../FooterSubcribe/instagram.png";
import youtube from "../FooterSubcribe/youtube.png";

export default function SubscribeFooterSocials() {
  return (
    <Container className="Total-Mini-Menu-Social-Media">
      <Row className="Mini-Menu-Social-Media">
        <Col className="col-4 Mini-Menu-Footer">
          <span>
            <a>Home</a>
          </span>
          <span>
            <a>Category</a>
          </span>
          <span>
            <a>About</a>
          </span>
          <span className="Contact-text-fix">
            <a>Contact</a>
          </span>
        </Col>
        <Col className="col-4">
          <div></div>
        </Col>
        <Col className="col-4 social-icons">
          <span>
            <img
              src={facebook}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
          <span>
            <img
              src={twitter}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
          <span>
            <img
              src={instagram}
              alt="logo"
              style={{
                height: "23.85px",
                width: "24px",
                marginRight: "5.84px",
              }}
            />
          </span>
          <span>
            <img
              src={youtube}
              alt="logo"
              style={{ height: "23.85px", width: "24px" }}
            />
          </span>
        </Col>
      </Row>
    </Container>
  );
}
