//import
import { useState, useEffect } from "react";
import "./Home.css";
import { Col, Row, Button, Carousel, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//Redax
import { useSelector } from "react-redux";
import { setShop } from "../../infoSlice";
//images
import example from "../picture/example.jpg";
import Artcle from "../picture/Artcle.jpg";
import Artcle2 from "../picture/Artcle2.jpg";
//Icon
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//Structure-Card

//Main
const Home = () => {
  const navigate = useNavigate();
  const InfoCard = useSelector((state) => state.Shop);
  const [items, setItems] = useState();
  axios
      .post("http://127.0.0.1:8000/all/")
      .then((res) => setItems(res.data.data));

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={() => {
          navigate("/Add");
        }}
      >
        Add
      </Button>
      <h3 id="dayBuy">پر فروش امروز</h3>
      <Row className="g-0">
        
        {items ? (
          <>
            {items.map((item) => (
                <div key={item.id}>
                  <h1>{item.name}</h1>|<h2>{item.price}</h2>
                </div>
            ))}
          </>
        ) : (
          <></>
        )}
        <Col className="col-3">
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
        <Col className="col-9">
          <Button variant="outline-dark" id="text">
            محصولات بیشتر
          </Button>
        </Col>
        <Col id="text">
          <h4>کامپیوتر های اسمبل شده</h4>
        </Col>
      </Row>

      <Row>
        <Col className="col-9">
          <Button variant="outline-dark" id="text">
            محصولات بیشتر
          </Button>
        </Col>
        <Col id="text">
          <h4>پرفروش ترین کالاها</h4>
        </Col>
      </Row>

      <Row>
        <Col className="col-8">
          <Button variant="outline-dark" id="text">
            محصولات بیشتر
          </Button>
        </Col>
        <Col id="text">
          <h4>جدید ترین کالاهای اضافه شده</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-9">
          <Button variant="outline-dark" id="text">
            مقالات بیشتر
          </Button>
        </Col>
        <Col id="text">
          <h4>مقالات جدید وبسایت</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Artcle} />
        </Col>
        <Col>
          <img src={Artcle2} />
        </Col>
      </Row>
    </>
  );
};
export default Home;
