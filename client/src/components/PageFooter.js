import React from "react";
import StickyFooter from "react-sticky-footer";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebook from "./image/facebook.png";
import linkedin from "./image/linkedin.png";
import twitter from "./image/twitter.png";

class PageFooter extends React.Component {
  render() {
    return (
      <StickyFooter
        // stickyStyles="bottom"
        normalStyles={{
          backgroundColor: "	#F8F8F8",
          padding: "4rem"
        }}
        stickyStyles={{
          backgroundColor: "	#F8F8F8",
          padding: "4rem"
        }}
      >
        <Container>
          <Row>
            <Col sm>
              <div className="text">
                <h5>Want more details?</h5>
                <Link to="/pages/contactus">
                  <Button variant="outline-secondary">Contact Us</Button>
                </Link>
              </div>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://www.facebook.com/Unichative-101376354742138/"
                className="ui medium image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="ui mini image"
                  src={facebook}
                  alt="facebook link"
                />
              </a>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://www.linkedin.com/company/unichative"
                class="ui medium image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="ui mini image"
                  src={linkedin}
                  alt="linkedin link"
                />
              </a>
            </Col>
            <Col sm md={{ span: 1, offset: 0 }}>
              <a
                href="https://twitter.com/unichative"
                class="ui medium image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="ui mini image"
                  src={twitter}
                  alt="twitter link"
                />
              </a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                <p style={{ textAlign: "center", color: "black" }}>
                  <i className="copyright outline icon"></i>
                  2020 by UNICHATIVE LLC.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </StickyFooter>
    );
  }
}

export default PageFooter;
