import React from "react";
import { Card } from "react-bootstrap";
import "./HomeBanner.css";

const HomeBanner = banner => {
  return (
    <div className="banner">
      <Card>
        <Card.Img src={banner.banner} alt="Card image" />
        <Card.ImgOverlay>
          <div>
            <Card.Title className="banner-text">{banner.text}</Card.Title>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default HomeBanner;
