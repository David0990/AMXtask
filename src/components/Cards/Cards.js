import React, { memo } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Row>
      <Col className={"mt-3 mb-4"} xs={12}>
        <h5
          style={{
            textAlign: "left",
            borderBottom: "solid 1px rgb(161, 161, 161)",
          }}
        >
          {props.title}
        </h5>
      </Col>
      {props.productsArray.map((product) => {
        return (
          <Col
            className={"mb-3"}
            style={{ height: "250px" }}
            key={product.id}
            xs={props.size}
          >
            <div
              style={{
                height: "70%",
                borderBottom: "solid 1px rgb(161, 161, 161)",
              }}
            >
              <img
                alt={""}
                style={{
                  objectFit: "cover",
                  borderRadius: "5%",
                }}
                src={product.images[0]}
                width="90%"
                height="90%"
              />
            </div>
            <div
              style={{
                height: "30%",
                textAlign: "left",
                padding: "5px 0 0 6%",
              }}
            >
              <Link to={`product/${product.id}`}>
                <h6>{product.name}</h6>
              </Link>
              <span style={{ color: "red" }}>$ {product.price}</span>
              {product.status ? (
                <span
                  style={{
                    backgroundColor: product.status === "NEW" ? "red" : "green",
                    marginLeft: "50%",
                    color: "white",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {product.status}
                </span>
              ) : (
                ""
              )}
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default memo(Cards);
