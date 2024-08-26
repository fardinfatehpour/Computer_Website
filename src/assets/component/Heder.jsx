import { useState } from "react";
import { Col, Row, Button, InputGroup } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../picture/logo.jpeg";
import './Heder.css'
const Heder = () => {
  return (
    <>
      <Row>
        <Col className="col-3.5">
          <Button variant="outline-dark" id="sign">
            <a align="center" id="signin">
              ورود
            </a>
            <h4>|</h4>
            <a align="left" id="signup">
              ثبت نام
            </a>
            <PersonIcon alt="person" id="person" align="right" />
          </Button>
        </Col>
        <Col>
          <InputGroup style={{ marginRight: "-10px" }}>
            <input
              type="text"
              placeholder="جست و جوی محصولات"
              id="search"
            ></input>
          </InputGroup>
        </Col>
        <Col>
          <h1 id="Welcome">Welcome</h1>
        </Col>
        <Col>
          <img src={logo} />
        </Col>
      </Row>
    </>
  );
};
export default Heder;
