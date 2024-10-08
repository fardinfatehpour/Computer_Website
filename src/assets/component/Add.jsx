import React, { useState, useEffect } from "react";
import { setShop } from "../../infoSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
// import sharp from "sharp";
// import path from "path";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";


const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector((state) => state.Shop.id);
  const name = useSelector((state) => state.Shop.name);
  const image = useSelector((state) => state.Shop.image);
  const score = useSelector((state) => state.Shop.score);
  const price = useSelector((state) => state.Shop.price);
  const available = useSelector((state) => state.Shop.available);

  const [uId, setUId] = useState();
  const [uName, setUName] = useState();
  const [uImage, setUImage] = useState();
  const [uScore, setUScore] = useState();
  const [uPrice, setUPrice] = useState();
  const [uAvailable, setUAvailable] = useState();

  useEffect(() => {
    setUId(id);
    setUName(name);
    setUImage(image);
    setUScore(score);
    setUPrice(price);
    setUAvailable(available);
  }, []);
  return (
    <>
      <Row>
        <Col className="col-3">
          <Button
            variant="danger"
            onClick={() => {
              navigate("/");
            }}
          >
            بازگشت به صفحه قبل
          </Button>
        </Col>
        <Col className="col-5">
          <Form>
            <h2 className="FormLable">id : {uId}</h2>
            <Form.Group>
              <Form.Label column sm="1"className="FormLable">
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setUName(e.currentTarget.value);
                }}
                value={uName}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="FormLable">Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setUImage(e.currentTarget.files);
                }}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label column sm="1">
                امتیاز
              </Form.Label>
              <Rating
                defaultValue={0}
                value={uScore}
                size="large"
                onChange={(e) => {
                  setUScore(uScore + "⭐");
                }}
              />
              
            </Form.Group> */}
            <Form.Group>
            <Form.Label column sm="1"className="FormLable">
                امتیاز
              </Form.Label>
              <Button
                variant="outline-warning"
                onClick={() => {
                  setUScore(uScore + "⭐");
                }}
              >
                ⭐
              </Button>
              <Form.Control
                type="text"
                placeholder="حداکثر 5 امتیاز"
                dir="rtl"

                value={uScore}
                readOnly
                disabled
                onChange={(e) => {
                  setUScore(e.currentTarget.value);
                }}
                
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="1"className="FormLable">
                price
              </Form.Label>
              <Form.Control
                type="text"
                dir="rtl"
                value={uPrice}
                onChange={(e) => {
                  setUPrice(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="1"className="FormLable">
                available
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="موجود یا ناموجود"
                value={uAvailable}
                onChange={(e) => {
                  setUAvailable(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Button
              variant="success"
              onClick={() => {
                setUId(uId + 1);
                dispatch(
                  setShop({
                    id: uId,
                    name: uName,
                    image: uImage,
                    score: uScore,
                    price: uPrice,
                    available: uAvailable,
                  })
                );
                Swal.fire({
                  title: "successful!",
                  text: "!عملیات با موفقیت انجام شد",
                  icon: "success",
                });
                navigate("/");
              }}
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Add;
