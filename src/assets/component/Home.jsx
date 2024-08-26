import { useState } from "react";
import { Col, Row, Button, Carousel, Card } from "react-bootstrap";
import example from "../picture/example.jpg";
import namad from "../picture/namad.png";
import Main from "../picture/exampleMain.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ssd from "../picture/exampleSsd.jpg";
import './Home.css'
const Home = () => {
  return (
    <>
      <h3 id="dayBuy">پر فروش امروز</h3>
      <Row>
        <Col className="col-3">
          <Card style={{ width: "17rem" }} id="Main">
            <Card.Img variant="top" src={Main} />
            <Card.Body>
              <Card.Title> ASUS PRIME H510M-K مادربرد</Card.Title>
              <Card.Text>⭐⭐⭐⭐⭐: امتیاز این محصول</Card.Text>
              <Card.Text id="mogod"> در انبار موجود است </Card.Text>
              <Row>
                <Col>
                  <p id="ShopButton">10,000,000</p>
                </Col>
                <Col>
                  <a>
                    <AddShoppingCartIcon id="ShopButton" />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card style={{ width: "17rem" }} id="Main">
            <Card.Img variant="top" src={ssd} />
            <Card.Body>
              <Card.Title> ssd m2 Samsung 980 1TB اس اس دی</Card.Title>
              <Card.Text>⭐⭐⭐⭐⭐: امتیاز این محصول</Card.Text>
              <Card.Text id="mogod"> در انبار موجود است </Card.Text>
              <Row>
                <Col>
                  <p id="ShopButton">10,000,000</p>
                </Col>
                <Col>
                  <Button variant="#2E073F">
                    <AddShoppingCartIcon id="ShopButton" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-6">
          <Carousel id="example">
            <Carousel.Item>
              <img src={example} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={example} />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col className="col-3" id="namad">
          <h3 id="fontIransans">نماد های اعتماد</h3>
          <img src={namad} />
        </Col>
      </Row>
      </>
  )
}
export default Home;