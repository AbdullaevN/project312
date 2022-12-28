import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export const CardD = (props) => {
  let { imgSrc, price, title } = props.data;

  return (
    <>
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light">
          <Card.Img
            variant="top"
            src="https://39.img.avito.st/avatar/social/256x256/5769562439.jpg"
          />
          <Card.Body className="text-center">
            <Card.Title className="display-6">{price}</Card.Title>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Button className="w-100 rounded-0 " variant="success">
            add
          </Button>
        </div>
      </Card>
    </>
  );
};
