import React from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/Button";
import TextTruncate from "react-text-truncate";

const New = ({ item }) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={item.urlToImage} />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <div>
            <TextTruncate
              line={3}
              truncateText="…"
              text={item.title}
              element={"h5"}
              className="d-block mb-2"
            />
            <TextTruncate
              line={3}
              element="p"
              truncateText="…"
              text={item.description}
              className="mb-3 d-block"
            />
          </div>
          <Button
            className="btn-secondary stretched-link ms-auto"
            href={item.url}
            target="_blank"
            variant="quaternary"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default New;
