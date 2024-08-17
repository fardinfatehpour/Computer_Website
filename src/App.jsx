import { useState } from "react";
import "./App.css";
import { Col, Row, Container, Button, Offcanvas, Carousel } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import example from "./assets/picture/example.jpg";

const App = () => {
  // show offcenves
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //show Carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {/* <Container> */}
      <Row>
        <Col className="col-3.5">
          <Button variant="outline-dark" id="sign">
            <PersonIcon alt="person" id="person" align="right" />
            <h6 align="center" id="signin">
              ورود
            </h6>
            <h6 align="left" id="signup">
              ثبت نام
            </h6>
          </Button>
        </Col>
        <Col>
          <input type="text" className="search" id="search"placeholder="جست و جوی محصولات" />
        </Col>
        <Col>
          <h1 id="Welcome">Welcome</h1>
        </Col>
        {/* </Container> */}
        <Col>
          <MenuIcon alt="MenuBars" id="MenuBars"onClick={handleShow} fontSize="large" />
        </Col>
        {/* offcenves */}
        <Offcanvas show={show} onHide={handleClose}placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
      <Row>
        <Col className="col-5"></Col>
        <Col>
        <Carousel activeIndex={index} onSelect={handleSelect}id="Carousel">
      <Carousel.Item>
        <img src={example} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={example} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={example} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </Col>
      </Row>
    </>
  );
};

export default App;
