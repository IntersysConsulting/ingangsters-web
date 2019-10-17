import React, { useState } from "react";
import LoadingBall from "../../../UI/Loading/Loading";
import Bar from "../../../NavBars/AdminNavBar/AdminNavBar";
import Tabs from "../../AdminTabBar/AdminTabBar";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "./MerchantView.css";
import { loadAdmin, deleteAdmin, createNewAdmin } from "./Connections";
import ConfirmationModal from "../../../UI/ConfirmationModal/ConfirmationModal";
const MerchantView = ({ match }) => {
  const { id } = match.params;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setFormData] = useState({
    showDeleteButton: false,
    title: "Add Administrator",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConf: "",
    submitAction: createNewAdmin,
    isLoading: id !== "new",
    showConfirmationModal: false,
    requirePassword: true
  });
  let content;
  const toggleConfirmationModal = () => {
    setFormData(prev => ({
      ...prev,
      showConfirmationModal: !prev.showConfirmationModal
    }));
  };
  if (formData.isLoading) {
    loadAdmin(id, setFormData);
    content = <LoadingBall />;
  } else {
    content = (
      <Form
        className="merchantForm"
        onSubmit={evt => {
          evt.preventDefault();
          formData.submitAction(evt);
          return false;
        }}
      >
        <h3>{formData.title}</h3>
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
              required={formData.requirePassword}
              onChange={evt => {
                const x = evt.target.value;
                setFormData(prev => ({
                  ...prev,
                  requirePassword: x !== ""
                }));
              }}
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
              required={formData.requirePassword}
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
          <Button
            className={
              "deleteAdmin" + (formData.showDeleteButton ? "" : " hide")
            }
            onClick={toggleConfirmationModal}
          >
            Delete
          </Button>
        </Row>
        <ConfirmationModal
          title="Delete admin"
          message="Are you sure you want to delete this administrator? This is a PERMANENT operation"
          affirmativeText="Confirm"
          affirmativeAction={() => {
            deleteAdmin(id);
            toggleConfirmationModal();
          }}
          negativeText="No"
          negativeAction={toggleConfirmationModal}
          closeAction={toggleConfirmationModal}
          show={formData.showConfirmationModal}
        />
      </Form>
    );
  }

  return (
    <React.Fragment>
      <Bar />
      <Tabs />
      {content}
    </React.Fragment>
  );
};

export default MerchantView;
