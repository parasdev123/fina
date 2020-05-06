import React from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import HomeBanner from "../page-features/HomeBanner";
import bannerImage from "../image/cover-about.JPG";

const text = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          position: "relative",
          fontSize: "9vw",
          marginTop: "5%",
          color: "white"
        }}
        className="ui header"
      >
        About Us
      </h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <HomeBanner banner={bannerImage} text={text()} />
      <br />
      <Container>
        <br />
        <br />
        <Row noGutters="false">
          <Col>
            <Card className="text-center" bg="white" border="white" text="dark">
              <Card.Body>
                <Card.Text>
                  <h4>
                    <strong>
                      We were established with the purpose of helping other
                      businesses prosper. Building websites is our job, but
                      helping others is our passion.
                    </strong>
                  </h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row noGutters="false">
          <Col>
            <Card className="text-center" border="light">
              <Card.Header>
                <h2 style={{ fontFamily: "Tahoma" }}>Unichative Is Built On</h2>
              </Card.Header>
              <br />
              <CardGroup>
                <Card border="light">
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ fontFamily: "Tahoma" }}>
                        Strong Relationships.
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      We understand that, in this business, it’s all about
                      people. We are committed to working with you to ensure
                      that you are getting exactly what you want.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="light">
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ fontFamily: "Tahoma" }}>Mutuality.</h3>
                    </Card.Title>
                    <Card.Text>
                      All the effort we put in to develop your website will help
                      us build our reputation. That way, you can be assured that
                      your website will be built with the principle of growth in
                      mind.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="light">
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ fontFamily: "Tahoma" }}>Communication.</h3>
                    </Card.Title>
                    <Card.Text>
                      We want your website to turn out exactly as you imagined
                      it. We want the end result to be the same as if you
                      designed the site yourself.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default About;
