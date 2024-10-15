import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row, Button, Carousel, Card } from "react-bootstrap";
import MainExample from "../picture/mainBoard.jpg";
import { useSelector } from "react-redux";
import { setShop } from "../../infoSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const { score, available } = useSelector((state) => state.Shop);
  const [items, setItems] = useState();
  const [uAvailable, setUAvailable] = useState("");
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/all/")
      .then((res) => setItems(res.data.data));
  }, []);
  if (available === true) {
    setUAvailable("");
    setUAvailable("در انبار موجود است");
  }
  if (available === false) {
    setUAvailable("");
    setUAvailable("در انبار موجود نیست");
  }
  return (
    <>
      <Row>
        {items ? (
          <>
            {items.slice(0, 4).map((item) => (
              <Col className="col-3" id="Product-Card">
                <Card style={{ width: "17rem" }} id="Main"onClick={()=>{
                  navigate()
                }}>
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
    </>
  );
}

export default Search;
