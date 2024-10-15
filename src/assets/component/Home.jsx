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
import MainExample from "../picture/mainBoard.jpg";
//Icon
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//Structure-Card

//Main

const Home = () => {
  const navigate = useNavigate();
  const { score, available } = useSelector((state) => state.Shop);
  const [items, setItems] = useState();
  const [uAvailable, setUAvailable] = useState("");

  useEffect(() => {
      axios
      .post("http://127.0.0.1:8000/all/")
      .then((res) => setItems(res.data.data));
      if (available === true) {
        setUAvailable("");
        setUAvailable("در انبار موجود است");
      }
      if (available === false) {
        setUAvailable("");
        setUAvailable("در انبار موجود نیست");
      }
  }, []);
  
  // const AxiosPost = () => {
  //   return new pramise((resolve, reject) => {
  //     setTimeout(() => {
  //       consol.log("loading :");
  //       axios
  //         .post("http://127.0.0.1:8000/all/")
  //         .then((res) => setItems(res.data.data));
  //       resolve("axios post is successful!");
  //     }, 1000);
  //   });
  // };
  // AxiosPost().than((result)=>{
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

      <Row>
        <Carousel id="example">
          <Carousel.Item>
            <img src={example} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={example} />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Col className="col-9">
          <Button variant="outline-dark" id="text">
            محصولات بیشتر
          </Button>
        </Col>
        <Col id="text" align>
          <h4>کامپیوتر های اسمبل شده</h4>
        </Col>
      </Row>
      <Row>
        {items ? (
          <>
            {items.slice(0, 4).map((item) => (
              <Col className="col-3" id="Product-Card">
                <Card
                  style={{ width: "17rem" }}
                  id="Main"
                  onClick={() => {
                    navigate("/product/" + item.id);
                  }}
                >
                  <Card.Img variant="top" src={MainExample} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{score}: امتیاز این محصول</Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text id="mogod">{uAvailable}</Card.Text>
                    <Row>
                      <Col>
                        <h6 id="ShopButton">{item.price}</h6>
                      </Col>
                      <Col>
                        <a>
                          <AddShoppingCartIcon id="ShopButton" />
                        </a>
                      </Col>
                      <p align="center">{item.item_id}</p>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <></>
        )}
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
        {items ? (
          <>
            {items.slice(5, 9).map((item) => (
              <Col className="col-3" id="Product-Card">
                <Card style={{ width: "17rem" }} id="Main">
                  <Card.Img variant="top" src={MainExample} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{score}: امتیاز این محصول</Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text id="mogod">{uAvailable}</Card.Text>
                    <Row>
                      <Col>
                        <h6 id="ShopButton">{item.price}</h6>
                      </Col>
                      <Col>
                        <a>
                          <AddShoppingCartIcon id="ShopButton" />
                        </a>
                      </Col>
                      <p align="center">{item.item_id}</p>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <></>
        )}
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
        {items ? (
          <>
            {items.slice(10, 14).map((item) => (
              <Col className="col-3" id="Product-Card">
                <Card style={{ width: "17rem" }} id="Main">
                  <Card.Img variant="top" src={MainExample} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{score}: امتیاز این محصول</Card.Text>
                    <Card.Text></Card.Text>
                    <Card.Text id="mogod">{uAvailable}</Card.Text>
                    <Row>
                      <Col>
                        <h6 id="ShopButton">{item.price}</h6>
                      </Col>
                      <Col>
                        <a>
                          <AddShoppingCartIcon id="ShopButton" />
                        </a>
                      </Col>
                      <p align="center">{item.item_id}</p>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <></>
        )}
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
// })
};

export default Home;
