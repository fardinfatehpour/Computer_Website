import { useState } from "react";
import "./App.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import person from './assets/person.png'

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <input type="button"><img src={person}/></input>
          </Col>
          <Col>
            <input type="text" className="search" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
