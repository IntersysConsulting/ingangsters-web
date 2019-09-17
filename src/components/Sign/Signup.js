import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Signup.css";
import "../../css/colors.css";
import { FaEye, FaCentercode } from "react-icons/fa";
import { connect } from "react-redux";
import { login } from "../../actions/creators/auth";
import { Form, Row, Col, InputGroup, Button, FormCheck } from "react-bootstrap";
import { Formik, FormikProps, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Login = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  /*   const {
    firstName,
    lastName,
    phone,
    email,
    password,
    passwordConfirm
  } = values;

  const handleChange = name => event => {
    console.log("Hola Mundo")
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onSubmit = async event => {
    event.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } */

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  function isValidEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
  }

  const schema = yup.object({
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
      .oneOf([yup.ref('password'),null], 'Passwords are not the same!')
      .min(8, "Min 8 characters.")
      .required("Password confirmation is required."),
    terms: yup.bool().required()
  });

  const signUpForm = () => (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
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
          <div className="row login-form">
            <div className="col-12">
              <h2>Sign up</h2>
              <h5>Please fill this form to create an account! </h5>
              <hr />
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFirstName">
                    <Form.Label>First name</Form.Label>
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
                    <Form.Label>Last name</Form.Label>
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
                    <Form.Label>Email</Form.Label>
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
                    <Form.Label>Phone</Form.Label>
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
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      <InputGroup.Prepend>
                        <div className="col-1 text-center" onClick={toggleShow}>
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
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPasswordConfirm ? "text" : "password"}
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
                          className="col-1 text-center"
                          onClick={toggleShowConfirm}
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
                <Button
                className="btn btn-intersys col-md-2"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );

  return (
    <div>
      <SimpleNavBar />
      {signUpForm()}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
