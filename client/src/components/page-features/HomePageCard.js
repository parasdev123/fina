import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import contact from "../image/contact_us.png";
import design from "../image/plan.png";
import build from "../image/build.png";
import launch from "../image/launch.png";
import "./HomePageCard.css";
const HomePageCard = () => {
  return (
    <div>
      <Card className="text-center" border="light">
        <Card.Header>
          <h4>
            <strong>Steps to take</strong>
          </h4>
        </Card.Header>
        <br />
        <CardGroup>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={contact} alt="Contact image" />
            </div>
            <Card.Body>
              <Card.Title className="title">Contact</Card.Title>
              <Card.Text>
                Head over to our
                <Link to="/pages/contactus"> contact </Link>
                page and get in touch with us! We will get back to you in 1 to 3
                days.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={design} alt="design image" />
            </div>
            <Card.Body>
              <Card.Title className="title">Design</Card.Title>
              <Card.Text>
                You tell us how you want your site. This step is your time to
                shine.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={build} alt="build image" />
            </div>
            <Card.Body>
              <Card.Title className="title">Build</Card.Title>
              <Card.Text>
                We take care of this part for you. It is here your design
                becomes a reality.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light">
            <div className="card-image">
              <Card.Img variant="top" src={launch} alt="Launch image" />
            </div>
            <Card.Body>
              <Card.Title className="title">Launch</Card.Title>
              <Card.Text>
                With your approval, we will put your website on the internet.
                Your business is now exposed to a new and growing audience!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card>
    </div>
  );
};

export default HomePageCard;
