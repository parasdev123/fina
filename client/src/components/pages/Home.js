import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HomeBanner from "../page-features/HomeBanner";
import HomePageCard from "../page-features/HomePageCard";
import bannerImage from "../image/homepage_hero.png";

const text = () => {
  return (
    <div>
      <h1
        style={{
          position: "relative",
          fontSize: "4.6vw",
          marginTop: "5%",
          // paddingTop: "6.5%",
          color: "black"
        }}
        class="ui header"
      >
        {/* Dont fall behind */}
      </h1>
      <br />
      <p style={{ fontSize: "1.3vw", position: "" }}>
        {/* Launch a professionally designed website today. */}
      </p>
    </div>
  );
};

const Home = () => {
  return (
    
    <div>
      <HomeBanner banner={bannerImage} text={text()} />
      <Container>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <Card className="text-center" bg="white" border="white" text="dark">
              <Card.Body>
                <Card.Title>
                  <h3>
                    <strong>We're here to help.</strong>
                  </h3>
                </Card.Title>
                <Card.Text>
                  <br />
                  <h4 style={{ fontFamily: "Segoe UI" }}>
                    We make the process to launch a website easy. All you need
                    is a vision, and we will do the rest.
                  </h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <HomePageCard />
      </Container>
    </div>
  );
};

export default Home;
