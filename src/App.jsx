import { useState } from "react";
import "./App.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import person from "./assets/person.png";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-3.5">
            <button id="sign">
              <img src={person} alt="person"id="person"align="right"/>
              <h6 align="center"id="signin">ورود</h6>
              <h6 align="left"id="signup">ثبت نام</h6>
            </button>
          </Col>
          <Col className="col-5">
            <input type="text" className="search"id="search" />
          </Col>
          <Col>
            <h1 id="Welcome">Welcome</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
