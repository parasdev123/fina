import React from "react";
import { Carousel } from "react-bootstrap";
import image from "./image/logo.PNG";
import codingImage from "./image/coding.PNG";
import moreCodingImage from "./image/coding1.PNG";
import "./Slideshow.css";

class Slideshow extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item className="item">
          <img className="img1" src={image} alt="First slide" />
          <Carousel.Caption className="text">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img className="img2" src={codingImage} alt="Third slide" />
          <Carousel.Caption className="text">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <div className="img3">
            <img className="img3" src={moreCodingImage} alt="Third slide" />
          </div>
          <Carousel.Caption className="text">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slideshow;
