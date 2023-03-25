// import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import SubscribeFooter from "../FooterSubcribe/SubscribeFooter";
import SubscribeFooterSocials from "../FooterSubcribe/SubscribeFooterSocials";
import CopyrightFooter from "./CopyrightFooter";

export default function FooterWrapper() {
  return (
    <div style={{ height: "363.50px", width: "1189.64px" }}>
      <div
        style={{
          background:
            "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
          display: "flex",
          paddingTop: "66.09px",
          paddingLeft: "107.4px",
          borderRadius: "33.0458px 33.0458px 0px 0px",
        }}
      >
        <Row style={{ width: "974.85px", height: "291.94px" }}>
          <SubscribeFooter />
          <SubscribeFooterSocials />
          <CopyrightFooter />
        </Row>
      </div>
    </div>
  );
}
