import React, { useState, useEffect, useCallback } from "react";
import { setShop } from "../../infoSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import axios from "axios";
import "./Add.css";
import SearchIcon from "@mui/icons-material/Search";
const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Redax
  const image = useSelector((state) => state.Shop.image);
  const score = useSelector((state) => state.Shop.score);
  const available = useSelector((state) => state.Shop.available);
  // state
  //AddState
  const [uId, setUId] = useState();
  const [uName, setUName] = useState();
  const [uPrice, setUPrice] = useState();
  const [uImage, setUImage] = useState();
  const [uScore, setUScore] = useState("");
  const [uAvailable, setUAvailable] = useState();

  //fetch from backend
  const [items, setItems] = useState();

  //Edit add Delete State
  const [Pid, setPId] = useState();
  const [itemIdEdit, setItemIdEdit] = useState();
  const [nameEdit, setNameEdit] = useState();
  const [priceEdit, setPriceEdit] = useState();
  //search state
  const [searchKey, setSearchKey] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setUImage(image);
    setUScore(score);
    setUAvailable(available);
    axios
      .post("http://127.0.0.1:8000/all/")
      .then((res) => setItems(res.data.data));
  }, []);

  useEffect(() => {
    {
      const temp = items?.filter((items) =>
        items.name.toLowerCase().includes(searchKey.toLowerCase())
      );
      setFiltered(temp);
    }
  }, [searchKey]);
  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Button
        variant="danger"
        onClick={() => {
          navigate("/");
        }}
      >
        بازگشت به صفحه قبل
      </Button>
      {/* Add */}
      <Row>
        <Col className="col-5">
          <Form>
            <Form.Group>
              <h2 align="center">Add</h2>
              <Form.Label column sm="1" className="FormLable">
                id :
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setUId(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="1" className="FormLable">
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
            <Form.Group>
              <div align="center">
                <Form.Label column sm="1" className="FormLable">
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

                <Button
                  variant="outline-dark"
                  onClick={() => {
                    setUScore("");
                  }}
                >
                  <BackspaceIcon />
                </Button>
              </div>
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
              <Form.Label column sm="1" className="FormLable">
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
              <Form.Label column sm="1" className="FormLable">
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
                axios.post("http://127.0.0.1:8000/add/", {
                  item_id: uId,
                  name: uName,
                  price: uPrice,
                });
                dispatch(
                  setShop({
                    image: uImage,
                    score: uScore,
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
        {/* delete */}
        <Col className="col-2" />
        <Col className="col-5">
          <Form>
            <Form.Group>
              <h2 align="center">Delete</h2>
              <Form.Label column sm="1" className="FormLable">
                id :
              </Form.Label>
              <Form.Control
                type="text"
                value={Pid}
                onChange={(e) => {
                  setPId(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Button
              variant="danger"
              onClick={() => {
                axios.post("http://127.0.0.1:8000/delete/", {
                  id: Pid,
                });
                Swal.fire({
                  title: "successful!",
                  text: "!عملیات با موفقیت انجام شد",
                  icon: "success",
                });
              }}
            >
              delete
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="col-5">
          {/* edit */}
          <Form>
            <Form.Group>
              <h2 align="center">Edit</h2>
              <Form.Label column sm="1" className="FormLable">
                id :
              </Form.Label>
              <Form.Control
                type="text"
                value={Pid}
                onChange={(e) => {
                  setPId(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="1" className="FormLable">
                Item_Id
              </Form.Label>
              <Form.Control
                type="text"
                value={itemIdEdit}
                onChange={(e) => {
                  setItemIdEdit(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="1" className="FormLable">
                Name:
              </Form.Label>
              <Form.Control
                type="text"
                value={nameEdit}
                onChange={(e) => {
                  setNameEdit(e.currentTarget.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label column sm="1" className="FormLable">
                price
              </Form.Label>
              <Form.Control
                type="text"
                dir="rtl"
                value={priceEdit}
                onChange={(e) => {
                  setPriceEdit(e.currentTarget.value);
                }}
              />
            </Form.Group>
            <Button
              variant="warning"
              onClick={() => {
                axios.post("http://127.0.0.1:8000/edit/", {
                  id: Pid,
                  item_id: itemIdEdit,
                  name: nameEdit,
                  price: priceEdit,
                });

                Swal.fire({
                  title: "successful!",
                  text: "!عملیات با موفقیت انجام شد",
                  icon: "success",
                });
                navigate("/");
              }}
            >
              Edit
            </Button>
          </Form>
        </Col>
      </Row>
      {/* search */}
      <InputGroup id="SearchData">
        <InputGroup.Text id="basic-addon1">
          <SearchIcon id="SearchIcon" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="جست و جو"
          dir="rtl"
          onChange={(e) => {
            setSearchKey(e.currentTarget.value);
          }}
        />
      </InputGroup>
      {/* table */}
      <table id="table">
        <thead>
          <tr>
            <th>id</th>
            <th>item-id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        {filtered.length > 0 ? (
          filtered?.map((item, key) => (
            <tbody
              onClick={() => {
                setPId(item.id);
              }}
            >
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.item_id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </table>
    </>
  );
};

export default Add;
