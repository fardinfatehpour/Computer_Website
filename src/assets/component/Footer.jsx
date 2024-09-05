import React from "react";
import './Footer.css';
import { Col, Row } from "react-bootstrap";
import namad from "../picture/namad.png";
import Logo from "../picture/logo.jpeg";

function Footer() {
  return (
    <Row>
      <Col className="col-2" id="namad">
        <h3 id="fontIransans">نماد های اعتماد</h3>
        <img src={namad} />
      </Col>
      <Col className="col-2" id="namad">
        <h3 id="fontIransans">سوشال مدیا</h3>
      </Col>
      <Col className="col-2" id="namad">
        <h3 id="fontIransans">دسته بندی</h3>
      </Col>
      <Col className="col-2" id="namad">
        <img src={Logo}id="Logo" />
      </Col>
    </Row>
  );
}

export default Footer;
