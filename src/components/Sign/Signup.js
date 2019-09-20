import React, { Component } from "react";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../../actions/types/auth";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Sign.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";
import { signUp } from "../../actions/creators/auth";
import { Form, Col, InputGroup, Button, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import Loading from "../UI/Loading/Loading";
import { isAuthenticated } from "../../utils/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showPasswordConfirm: false,
      alertVisible: false,
      redirect: false,
      isAuthenticated: isAuthenticated()
    };
  }

  alertVariant = "danger";
  alertMessage = "";

  toggleShow = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  toggleShowConfirm = () => {
    this.setState({
      showPasswordConfirm: !this.state.showPasswordConfirm
    });
  };
  isAlertVisible = status => {
    if (status) {
      this.setState({
        alertVisible: true
      });
    } else {
      this.setState({
        alertVisible: false
      });
    }
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }
    if (this.state.redirect) {
      return (
        <React.Fragment>
          <div className="offset-5 col-2">
            <Loading />
          </div>
          <Redirect to="/login" />
        </React.Fragment>
      );
    }
  };

  schema = yup.object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    phone: yup
      .number()
      .integer()
      .positive(),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required."),
    password: yup
      .string()
      .min(8, "Min 8 characters.")
      .required("Password is required."),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords are not the same!")
      .min(8, "Min 8 characters.")
      .required("Password confirmation is required."),
    terms: yup.bool().required()
  });

  signUpForm = () => (
    <Formik
      validationSchema={this.schema}
      onSubmit={async values => {
        let response = "";
        response = await signUp(
          values.firstName + " " + values.lastName,
          values.email,
          values.password,
          values.phone
        );
        if (response.type === SIGNUP_SUCCESS) {
          this.alertVariant = "success";
          this.alertMessage = "Register success.";
          this.isAlertVisible(true);
          setTimeout(() => {
            this.setRedirect();
          }, 1500);
          console.log("Register success");
        } else if (response.type === SIGNUP_FAIL) {
          if (response.status === 409) {
            this.alertVariant = "danger";
            this.alertMessage = "Error!!! The email already exists.";
            this.isAlertVisible(true);
          } else if (response.status >= 400) {
            this.alertVariant = "danger";
            this.alertMessage = "Exist a error.";
          }
        }
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirm: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <div className="container mt-5">
          <Alert
            key="alert"
            variant={this.alertVariant}
            onClose={() => this.isAlertVisible(false)}
            show={this.state.alertVisible}
            dismissible
          >
            {this.alertMessage}
          </Alert>
          <div className="row sign-form">
            <div className="col-12">
              <h2>Sign up</h2>
              <h5 className="form-title pb-3 mb-4">
                Please fill this form to create an account!{" "}
              </h5>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFirstName">
                    <Form.Label className="text-muted">First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationLastName">
                    <Form.Label className="text-muted">Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationEmail">
                    <Form.Label className="text-muted">Email</Form.Label>
                    <Form.Control
                      type="email"
                      pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/"
                      name="email"
                      placeholder="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationPhone">
                    <Form.Label className="text-muted">Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="phone"
                      placeholder="Phone (optional)"
                      value={values.phone}
                      onChange={handleChange}
                      isValid={touched.phone && !errors.phone}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationPassword">
                    <Form.Label className="text-muted">Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={this.state.showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      <InputGroup.Prepend>
                        <div
                          className="col-1 text-center icon"
                          onClick={this.toggleShow}
                        >
                          <FaEye size={32} />
                        </div>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback as={Col} md="12" type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationConfirmPassword"
                  >
                    <Form.Label className="text-muted">
                      Confirm Password
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={
                          this.state.showPasswordConfirm ? "text" : "password"
                        }
                        name="passwordConfirm"
                        placeholder="confirm password"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        isValid={
                          touched.passwordConfirm && !errors.passwordConfirm
                        }
                        isInvalid={!!errors.passwordConfirm}
                      />
                      <InputGroup.Prepend>
                        <div
                          className="col-1 text-center icon"
                          onClick={this.toggleShowConfirm}
                        >
                          <FaEye size={32} />
                        </div>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback as={Col} md="12" type="invalid">
                        {errors.passwordConfirm}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    name="terms"
                    isInvalid={!!errors.terms}
                    feedback="You must agree before submitting."
                    onChange={handleChange}
                    label={
                      <React.Fragment>
                        I accept the {"\u00a0"}
                        <Link className="link" to="#">
                          Terms of Use
                        </Link>
                        {"\u00a0"} & {"\u00a0"}
                        <Link className="link" to="#">
                          Privacy Policy
                        </Link>
                        .
                      </React.Fragment>
                    }
                  ></Form.Check>
                </Form.Group>
                <Button className="btn btn-intersys col-md-2" type="submit">
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <SimpleNavBar />
        {this.signUpForm()}
      </div>
    );
  }
}
export default SignUp;
