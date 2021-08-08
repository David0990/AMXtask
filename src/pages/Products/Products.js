import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getAll } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import Tags from "../../components/Tags/Tags";
import BestSellers from "../../components/BestSellers/BestSellers";
import Header from "../../components/Header/Header";
import backgroundImg from "./images/headerImg.jpg";
import defaultImg1 from "./images/defaultImg1.jpg";
import defaultImg2 from "./images/defaultImg2.jpg";

function Products(props) {
  useEffect(() => {
    //Get all (products, categories and tags)
    props.getAll();
  }, []);

  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div>
      <Container>
        <Row className={"mb-4"}>
          <Header
            imgLink={backgroundImg}
            size={12}
            color={"black"}
            title={"Big Title Here"}
            text={`Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used as a placeholder before
            final copy is available. It is also used to temporarily replace text
            in a process called greeking, which allows designers to consider the
            form of a webpage or publication, without the meaning of the text
            influencing the design.`}
            elementsPositions={"right"}
            weight={400}
            minimumHeight={"300px"}
          />
        </Row>

        <Row className={"justify-content-center mb-4"}>
          <Header
            imgLink={defaultImg1}
            size={4}
            title={"Big Title Here"}
            text={`Lorem ipsum is a placeholder text commonly used to`}
            elementsPositions={"right"}
            color={"black"}
            weight={400}
            minimumHeight={"150px"}
          />
          <Col xs={1}></Col>
          <Header
            imgLink={defaultImg2}
            size={4}
            title={"Big Title Here"}
            text={`Lorem ipsum is a placeholder text commonly used to`}
            elementsPositions={"right"}
            color={"white"}
            weight={400}
            minimumHeight={"150px"}
          />
        </Row>
      </Container>

      <div
        style={{
          width: "50%",
          display: "inline-flex",
          marginRight: "5%",
          marginLeft: "6%",
        }}
      >
        <Container>
          {props.allProducts ? (
            <Cards
              size={4}
              title={"FEATURED PRODUCTS"}
              productsArray={
                activeCategory
                  ? props.allProducts.filter(
                      (product) => product.category === activeCategory
                    )
                  : props.allProducts
              }
            />
          ) : (
            <h6>There is no products</h6>
          )}
        </Container>
      </div>

      <div
        style={{
          width: "25%",
          display: "inline-flex",
          marginRight: "6%",
        }}
      >
        <Container>
          {props.allCategories ? (
            <CategoriesBlock
              title={"CATEGORIES"}
              size={3}
              categoriesArray={props.allCategories}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
            />
          ) : (
            ""
          )}

          {props.allProducts ? (
            <BestSellers
              title={"Best Sellers"}
              sellersArray={props.allProducts.filter(
                (product) => product.status === "SALE"
              )}
            />
          ) : (
            ""
          )}

          {props.allTags ? (
            <Tags tagsArray={props.allTags} title={"Tags"} />
          ) : (
            ""
          )}
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    allCategories: state.allCategories,
    allTags: state.allTags,
  };
};

const mapDispatchToProps = {
  getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
