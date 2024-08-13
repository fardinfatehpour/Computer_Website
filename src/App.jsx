import { useState } from "react";
import "./App.css";
import { Col, Row, Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className="TxtWelcome">welcome</h1>
        </Col>
        <Col>
          <input type="text" className="search" />
        </Col>
      </Row>
    </>
  );
};

export default App;
