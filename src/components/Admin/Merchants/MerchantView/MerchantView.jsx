import React, { useState } from "react";
import LoadingBall from "../../../UI/Loading/Loading";
import Bar from "../../../NavBars/AdminNavBar/AdminNavBar";
import Tabs from "../../AdminTabBar/AdminTabBar";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "./MerchantView.css";
import { loadAdmin, deleteAdmin, createNewAdmin } from "./Connections";
const MerchantView = ({ match }) => {
  const { id } = match.params;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(id !== "new");
  const [formData, setFormData] = useState({
    showDeleteButton: false,
    title: "Add Administrator",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConf: "",
    submitAction: createNewAdmin
  });
  if (loading) {
    loadAdmin(id, setLoading, setFormData);
  }
  let content, deleteButton;
  if (formData.showDeleteButton)
    deleteButton = (
      <Button className="deleteAdmin" onClick={() => deleteAdmin(id)}>
        Delete
      </Button>
    );
  else deleteButton = null;

  if (loading) content = <LoadingBall />;
  else
    content = (
      <Form
        className="merchantForm"
        onSubmit={evt => {
          evt.preventDefault();
          formData.submitAction(evt);
          return false;
        }}
      >
        <h3>Add Administrator</h3>
        <br />
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="merchantName"
              placeholder="Name"
              defaultValue={formData.name}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="merchantLastName"
              placeholder="Last name"
              defaultValue={formData.lastName}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="email"
              name="merchantEmail"
              placeholder="Email"
              defaultValue={formData.email}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="phone"
              name="merchantPhone"
              placeholder="Phone (Optional)"
              defaultValue={formData.phone}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={9} md={10} lg={11}>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="merchantPassword"
              className="passwordField"
              placeholder="Password"
              required
            ></Form.Control>
          </Form.Group>
          <Col xs={3} md={2} lg={1}>
            <FaEye
              color="#000"
              className={"showPasswordButton" + (showPassword ? " active" : "")}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Form.Group as={Col} xs={9} md={10} lg={11}>
            <Form.Control
              type={showPasswordConfirm ? "text" : "password"}
              className="passwordField"
              name="merchantPasswordConfirm"
              placeholder="Confirm password"
              required
            ></Form.Control>
          </Form.Group>
          <Col xs={3} md={2} lg={1}>
            <FaEye
              color="#000"
              className={
                "showPasswordButton" + (showPasswordConfirm ? " active" : "")
              }
              onClick={() => {
                setShowPasswordConfirm(!showPasswordConfirm);
              }}
            />
          </Col>
        </Row>
        <Row className="bottomButtonBar">
          <Button variant="primary" type="submit" className="saveButton">
            Save
          </Button>
          {deleteButton}
          {/* <Button
            variant="primary"
            type="submit"
            className="backButton"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </Button> */}
        </Row>
      </Form>
    );

  return (
    <React.Fragment>
      <Bar />
      <Tabs />
      {content}
    </React.Fragment>
  );
};

export default MerchantView;
