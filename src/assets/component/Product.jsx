import axios from "axios";
import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import MainExample from "../picture/mainBoard.jpg";
import './Product.css';
import { Carousel, Row, Col } from "react-bootstrap";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
function Product() {
  const { product } = useParams();
  const [items, setItems] = useState();
  axios
    .post("http://127.0.0.1:8000/get/", {
      id: product,
    })
    .then((res) => setItems(res.data.data));
  return (
    <div>
        <Row>
          <Col className="col-5">
        <Carousel id="MainExample">
          <Carousel.Item>
            <img src={MainExample}className="img" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={MainExample}className="img" />
          </Carousel.Item>
        </Carousel>
        </Col>
        <h1 className="h1"dir="rtl"> نام محصول : {items?.name}</h1>
        
        <h3 className="h1"dir="rtl"> بارکد : {items?.item_id}</h3>
        <LocalAtmIcon/>
        <h1 id="price">{items?.price}  <LocalAtmIcon fontSize="large"/></h1>
      </Row>
    </div>
  );
}

export default Product;
