import React, { useState, useEffect } from "react";
import { Col, Row, Button, InputGroup, Form } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../picture/logo.jpeg";
import "./Heder.css";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Heder = () => {
  //dark light
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const LightTheme = "./assets/css/Light.css";
    const DarkTheme = "./assets/css/Dark.css";
    const Theme = isDarkMode ? DarkTheme : LightTheme;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = Theme;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [isDarkMode]);
  return (
    <>
      <Row>
        <Col>
          <Button
            variant="outline-dark"
            id="DarkLight"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              
            }}
          >
            <NightlightIcon />
            <LightModeIcon />
          </Button>
        </Col>
        <Col>
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
          <InputGroup dir="rtl" id="input">
            {/* <Button variant="outline-dark"><SearchIcon id="searchicon" /></Button> */}
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="جست و جوی محصولات"
              id="search"
            />
          </InputGroup>
        </Col>
        <Col>
          <h1 id="Welcome">Welcome</h1>
        </Col>
        <Col>
          <img src={logo}id="Logo" />
        </Col>
      </Row>
    </>
  );
};
export default Heder;
