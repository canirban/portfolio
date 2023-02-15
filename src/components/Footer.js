import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import analyticsEventTracker from "../utils/Analytics";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{ paddingTop: "14px" }} className="social-icon">
              <a
                onClick={() => {
                  analyticsEventTracker(
                    "LinkedIn seen",
                    "OnClickLinkedIn",
                    "LinkedIn on Click"
                  );
                }}
                href="https://www.linkedin.com/in/anirbanc17/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                onClick={() => {
                  analyticsEventTracker(
                    "Github seen",
                    "OnClickGithub",
                    "Github on Click"
                  );
                }}
                href="https://github.com/canirban"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
