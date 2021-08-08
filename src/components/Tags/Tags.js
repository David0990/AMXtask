import React, { memo } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';

function Tags(props) {
  return (
    <>
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

      <Row className={'pt-3 pb-3'} style={{
        backgroundColor: 'rgb(231, 231, 231)', borderRight: 'solid 1px grey',
        borderLeft: 'solid 1px black', borderBottom: 'solid 1px grey'
      }}>
        {props.tagsArray.map((tag) => (
          <Col key={tag}>{tag}</Col>
        ))}
      </Row>
    </>
  );
}

Tags.propTypes = {
  tagsArray: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default memo(Tags);
