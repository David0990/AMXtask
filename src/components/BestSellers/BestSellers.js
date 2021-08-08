import React, { memo, Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function BestSellers(props) {

  return (
    <Fragment>
      <Row
        className={"pt-3 pb-2"}
        style={{
          backgroundColor: "rgb(231, 231, 231)",
          border: "solid 1px grey",
        }}
      >
        <Col xs={12}>
          <h6>{props.title}</h6>
        </Col>
      </Row>

      <Row
        className={"pt-3 pb-3 mb-5"}
        style={{
          backgroundColor: "rgb(231, 231, 231)",
          borderRight: "solid 1px grey",
          borderLeft: "solid 1px grey",
          borderBottom: "solid 1px grey",
        }}
      >
        {props.sellersArray.map((el) => {
          return (
            <Fragment key={el.id + el.status}>
              <Col className={"mb-2"} xs={5}>
                <img
                  alt={""}
                  src={el.images[0]}
                  style={{ objectFit: "cover" }}
                  width="90%"
                  height="90%"
                />
              </Col>
              <Col xs={7} style={{ lineHeight: "17px", textAlign: "left" }}>
                <p style={{ marginBottom: "3px" }}>{el.short_description}</p>
                <p
                  style={{
                    marginBottom: "3px",
                    paddingLeft: "2%",
                    color: "grey",
                  }}
                >
                  <del> $ {el.price}</del> <sup>00</sup>
                </p>
                <p style={{ paddingLeft: "2%", color: "red" }}>
                  $ {Number(el.price - 50)} <sup>00</sup>
                </p>
              </Col>
            </Fragment>
          );
        })}
      </Row>
    </Fragment>
  );
}

export default memo(BestSellers);
