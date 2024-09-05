import { useState } from "react";
import { Col, Row, Button, Carousel, Card } from "react-bootstrap";
import example from "../picture/example.jpg";
import Main from "../picture/exampleMain.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ssd from "../picture/exampleSsd.jpg";
import "./Home.css";
import Artcle from "../picture/Artcle.jpg";
import Artcle2 from "../picture/Artcle2.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setShop } from "../../infoSlice";

// const products = [
//   {
//     id: 1,
//     name: "ssd m2 Samsung 980 1TB",
//     image: ssd,
//     score: "⭐⭐⭐⭐⭐",
//     price: 1000000,
//     available: false,
//   },
//   {
//     id: 2,
//     name: " ASUS PRIME H510M-K مادربرد",
//     image: Main,
//     price: 1000000,
//     available: true,
//     score: "⭐⭐⭐⭐⭐",
//   },
// ];

const ProductCard = ({}) => {
  const { id, name, image, score, price, available } = useSelector(
    (state) => state.Shop
  );
  return (
    <Col className="col-3 gx-0">
      <Card style={{ width: "17rem" }} id="Main">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>id={id}</Card.Text>
          <Card.Text>{score}:امتیاز این محصول</Card.Text>
          {available ? (
            <Card.Text id="mogod">در انبار موجود است</Card.Text>
          ) : (
            <Card.Text id="mogod">در انبار موجود نیست</Card.Text>
          )}
          <h2>{available}</h2>
          <Row>
            <Col>
              <p id="ShopButton">{price}</p>
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
  );
};

const Home = () => {
  const navigate = useNavigate();
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
        <Col className="col-6">
            <ProductCard/>
        </Col>

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
      {/* example card */}
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
