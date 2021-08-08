// import React, {memo} from 'react';
// import {Row, Col} from 'react-bootstrap';

// function Tags (props){

//     return <Row> <Col xs={4} style={{border: 'solid 2px grey'}}>
//         <div style={{height: '30px', borderBottom: 'solid 1px grey'}}>{props.title}</div>

//         <div style={{ textAlign: 'left'}}>
//             {props.tagsArray.map(tag => <p>{tag}</p>)}
//         </div>
//   </Col></Row>
// }

// export default memo(Tags);

import React, { memo } from "react";
import { Row, Col } from "react-bootstrap";

function Tags(props) {
  return (
    <>
      {" "}
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

      <Row className={'pt-3 pb-3'} style={{backgroundColor: 'rgb(231, 231, 231)', borderRight: 'solid 1px grey', 
      borderLeft: 'solid 1px black', borderBottom: 'solid 1px grey'}}>
        {props.tagsArray.map((tag) => (
          <Col key={tag}>{tag}</Col>
        ))}
      </Row>
    </>
  );
}

export default memo(Tags);
