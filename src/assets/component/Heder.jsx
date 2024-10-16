import React, { useState, useEffect } from "react";
import { Col, Row, Button, InputGroup, Form } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../picture/logo.jpeg";
import "./Heder.css";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Heder = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState();
  //dark light
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    Cookies.set("fardin", "salam", { expires: 1 });
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
  const value = Cookies.get("fardin");
  axios
    .post("http://127.0.0.1:8000/all/")
    .then((res) => setItems(res.data.data));
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/all/")
      .then((res) => console.log(res.data.data));
  }, []);
  return (
    <>
      <Row>
        <Col>
          {isDarkMode ? (
            <Button
              variant="outline-dark"
              id="DarkLight"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                console.log(value);
              }}
            >
              <LightModeIcon />
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              id="DarkLight"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                console.log(value);
              }}
            >
              <NightlightIcon />
            </Button>
          )}
        </Col>
        <Col>
          <Button variant="outline-dark" id="sign">
            <a
              align="center"
              id="signin"
              onClick={() => {
                navigate("/signin");
              }}
            >
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
          <h1 id="Welcome">Welcome</h1>
        </Col>
        <Col>
          <div dir="rtl" id="input">
            {/* <Button variant="outline-dark"><SearchIcon id="searchicon" /></Button> */}
            <Form.Select
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="جست و جوی محصولات"
              id="search"
            >
              <option>select</option>
              <option>
                {items ?.map((item) => (<>
                  <p>id:{item.id}</p>
                  <p>id:{item.name}</p>
                  <p>id:{item.price}</p>
                  </>
                ))}
              </option>
            </Form.Select>
            <SearchIcon id="search-icon" fontSize="large"onClick={()=>{
              navigate("/Search")
            }} />
          </div>
        </Col>
        <Col>
          <img src={logo} id="Logo" />
        </Col>
      </Row>
    </>
  );
};
export default Heder;
