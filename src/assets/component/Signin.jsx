import React, { useState } from "react";
import "./Signin.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

function Signin() {
  const navigte = useNavigate();
  return (
    <>
    


      {/* <Button
        className="center"
        onClick={() => {
          navigte("/");
        }}
      >
        برگشت به صفحه قبل
      </Button>
      <Form align="center">
        <LockIcon/>
      </Form> */}
    </>
  );
}

export default Signin;
