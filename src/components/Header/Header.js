import React, { memo } from "react";
import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <Col
      className={"pt-2"}
      style={{
        backgroundImage: `url(${props.imgLink})`,
        minHeight: props.minimumHeight,
        height: "auto",
        backgroundRepeat: "round",
        textAlign: props.elementsPositions,
      }}
      xs={props.size}
    >
      <div
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "left",
          color: props.color,
        }}
      >
        <h4>{props.title}</h4>
        <p style={{ fontWeight: props.weight }}>{props.text}</p>
        <button
          style={{
            height: "35px",
            backgroundColor: "rgb(255, 57, 57)",
            border: "none",
            color: props.color,
            borderRadius: "5px",
          }}
        >
          Show me more
        </button>
      </div>
    </Col>
  );
}

Header.propTypes = {
  imgLink: PropTypes.string.isRequired,
  minimumHeight: PropTypes.string,
  elementsPositions: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string
};

export default memo(Header);