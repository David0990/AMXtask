import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const textColor = "white";

function Menu() {
  return (
    <Container>
      <Row style={{ backgroundColor: "black" }}>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Men's
        </Col>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Women's
        </Col>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Kids
        </Col>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Sports
        </Col>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Brands
        </Col>
        <Col xs={1} className={"text-left"} style={{ color: textColor }}>
          Collections
        </Col>
      </Row>
    </Container>
  );
}

export default memo(Menu);
