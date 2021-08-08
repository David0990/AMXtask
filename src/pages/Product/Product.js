import React, { useState, useEffect } from "react";
import { getProduct } from "../../redux/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faInbox,
  faHeart,
  faEnvelope,
  faArrowsAltH,
  faPlusCircle,
  faMinusCircle,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Modal } from "react-bootstrap";
import style from "./style.module.css";
import "react-medium-image-zoom/dist/styles.css";

function Product(props) {

  useEffect(() => {
    props.getProduct(props.match.params.id);
  }, []);

  const [mainImg, setMainImg] = useState(0);
  const [coantity, setCoantity] = useState(0);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    props.product && (
      <Container>
        <Row className={"pt-4"}>
          <Col xs={6}>
            <div>
              <img
                alt={""}
                style={{
                  objectFit: "contain",
                }}
                src={props.product.images[mainImg]}
                width="100%"
                height="400px"
              />
            </div>

            <div style={{ textAlign: "right" }}>
              <span onClick={toggleShow}>
                <FontAwesomeIcon icon={faArrowsAlt} size="lg" />
              </span>
            </div>

            <div>
              {props.product.images.map((img, i) => (
                <img
                  key={img}
                  style={{
                    border: mainImg === i ? "solid 1px red" : "",
                  }}
                  onClick={() => {
                    setMainImg(i);
                  }}
                  src={img}
                  alt={""}
                  height={"80px"}
                />
              ))}
            </div>
          </Col>

          <Col xs={6}>
            <h2 style={{ textAlign: "left" }}>{props.product["name"]}</h2>
            <div className={style.descriptivePart}>
              <FontAwesomeIcon icon={faStar} size="xs" />
              <FontAwesomeIcon icon={faStar} size="xs" />
              <FontAwesomeIcon icon={faStar} size="xs" />
              <FontAwesomeIcon icon={faStar} size="xs" />
              <FontAwesomeIcon icon={faStar} size="xs" />
              <span
                style={{
                  marginLeft: "1%",
                  marginRight: "1%",
                  borderRight: "solid 1px grey",
                }}
              >
                (0 reviews)
              </span>
              Add Your Review
            </div>

            <div className={style.descriptivePart}>
              <span>
                <del> $ {props.product["price"]}</del>
              </span>
              <span
                style={{
                  padding: "0 5px 0 5px",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                $ {Number(props.product["price"]) - 50}
              </span>
            </div>

            <div className={style.descriptivePart}>
              <span
                style={{
                  padding: "0px 4px 2px 4px",
                  marginRight: "5px",
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faInbox} size="xs" /> ADD TO CART
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faHeart} size="xs" />
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faEnvelope} size="xs" />
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faArrowsAltH} size="xs" />
              </span>
            </div>

            <div className={style.descriptivePart}>
              <span>
                <b>Quantity: </b>
              </span>
              <button
                disabled={coantity === 0}
                className={style.icons}
                onClick={() => {
                  setCoantity(coantity - 1);
                }}
              >
                <FontAwesomeIcon icon={faMinusCircle} size="xs" />
              </button>

              <span
                className={style.icons}
                style={{
                  padding: "0 10px 2px 10px",
                }}
              >
                {coantity}
              </span>

              <button
                onClick={() => {
                  setCoantity(coantity + 1);
                }}
                disabled={coantity === props.product.quantity}
                className={style.icons}
              >
                <FontAwesomeIcon icon={faPlusCircle} size="xs" />
              </button>
            </div>

            <div className={style.descriptivePart}>
              <h6>Quick Overview</h6>
              <p>
                Nam tristique Ligulo. vel viverro sem eleifend nec. Nulla sed
                purus aufguce eu euls mo. Nam mattis eros tis sagittis.
                Vesibulum suscripit cursus biben
              </p>
            </div>

            <div>
              <p style={{ textAlign: "left" }}>
                <b>Availability:</b> In Stock
              </p>
              <p style={{ textAlign: "left" }}>
                <b>Category:</b> {props.product["category"]}
              </p>
            </div>

            <div className={style.descriptivePart}>
              <span
                className={style.icons}
                style={{
                  backgroundColor: "rgb(77, 77, 255)",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} size="xs" /> Share
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faGoogle} size="xs" /> Google
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faTwitter} size="xs" /> Twitter
              </span>
              <span className={style.icons}>
                <FontAwesomeIcon icon={faLinkedinIn} size="xs" /> Linkedin
              </span>
            </div>
          </Col>
        </Row>

        {show && (
          <Modal
            show={true}
            onHide={toggleShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Footer>
              <img alt={""} src={props.product.images[mainImg]} width="100%" />
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
