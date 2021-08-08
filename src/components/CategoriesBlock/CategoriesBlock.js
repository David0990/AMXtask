import React, { memo, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

function CategoriesBlock(props) {
  return (
    <Row className={'pt-3 pb-3 mb-5'} style={{backgroundColor: 'rgb(231, 231, 231)', border: 'solid 1px grey', minHeight: '180px'}}>
      <Col className={'mb-2'} xs={12} style={{ height: "30px", borderBottom: "solid 1px grey" }}>
        {props.title}
      </Col>
      {props.categoriesArray.map((category) => {
        return (
          <Fragment key={category}>
            <Col xs={3}>{category}</Col>
            <Col xs={7}>
              <hr></hr>
            </Col>
            <Col xs={2}>
            {category === props.activeCategory ? (
              <FontAwesomeIcon
                onClick={() => {
                  props.setActiveCategory("");
                }}
                icon={faMinusCircle}
                size="1x"
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => {
                  props.setActiveCategory(category);
                }}
                icon={faPlusCircle}
                size="1x"
              />
            )}
            </Col>
          </Fragment>
        );
      })}
    </Row>
  );
}

CategoriesBlock.propTypes = {
  title: PropTypes.string,
  categoriesArray: PropTypes.array.isRequired,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func.isRequired
};

export default memo(CategoriesBlock);
