import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Sigup.css";
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

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup
      .number()
      .integer()
      .positive(),
    email: yup.string().email(),
    password: yup
      .string()
      .min(8)
      .required(),
    passwordConfirm: yup
      .string()
      .min(8)
      .required(),
    terms: yup.bool().required()
  });

  const signUpForm = () => (
    /* <div className="container mt-5">
      <div className="row login-form">
        <div className="col-12">
          <h2>Sign up</h2>
          <h5>Please fill this form to create an account! </h5>
          <hr />
          <form>
            <div className="form-group">
              <Row>
                <Col>
                  <label className="text-muted">First name</label>
                  <input
                    onChange={handleChange("firstName")}
                    type="text"
                    placeholder="First name"
                    className="form-control"
                    value={firstName}
                  />
                </Col>
                <Col>
                  <label className="text-muted">Last name</label>
                  <input
                    onChange={handleChange("lastName")}
                    type="text"
                    placeholder="Last name"
                    className="form-control"
                    value={lastName}
                  />
                </Col>
              </Row>
            </div>

            <div className="form-group">
              <label className="text-muted">Phone</label>
              <input
                onChange={handleChange("phone")}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone (Optional)"
                className="form-control"
                value={phone}
              />
            </div>

            <div className="form-group">
              <label className="text-muted">Password</label>
              <div className="row">
                <div className="col-10 col-sm-10 col-md-11 col-lg-11 pr-0">
                  <input
                    onChange={handleChange("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="form-control"
                    value={password}
                  />
                </div>
                <div className="col-1 text-center" onClick={toggleShow}>
                  <FaEye size={32} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="text-muted">Confirm Password</label>
              <div className="row">
                <div className="col-10 col-sm-10 col-md-11 col-lg-11 pr-0">
                  <input
                    onChange={handleChange("passwordConfirm")}
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    className="form-control"
                    value={passwordConfirm}
                  />
                </div>
                <div className="col-1 text-center" onClick={toggleShowConfirm}>
                  <FaEye size={32} />
                </div>
              </div>
            </div>





            <p className="link">Forgot password</p>
            <div className="mb-4 text-center">
              <button
                onClick={onSubmit}
                className="btn btn-intersys btn-block my-3"
              >
                Login
              </button>
              <Link className="link" to="/signup">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div> */

    /*  <div className="container mt-5">
      <div className="row login-form">
        <div className="col-12">
          <h2>Sign up</h2>
          <h5>Please fill this form to create an account! </h5>
          <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your lasts name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Phone (optional)"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    onChange={handleChange("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    value={password}
                  />
                  <InputGroup.Prepend>
                    <div className="col-1 text-center" onClick={toggleShow} ref={hola}>
                      <FaEye size={32} />
                    </div>
                  </InputGroup.Prepend>
                  <Form.Control.Feedback as={Col} md="12" type="invalid">
                    Please provide a password.
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
                    required
                    onChange={handleChange("passwordConfirm")}
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="confirm password"
                    value={passwordConfirm}
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
                    Please provide a password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                type="checkbox"
                required
                feedback="You must agree before submitting."
                label={
                  <React.Fragment>
                    I accept the {'\u00a0'}
                    <Link className="link" to="#">
                    Terms of Use
                    </Link>
                    {'\u00a0'} & {'\u00a0'}
                    <Link className="link" to="#">
                      Privacy Policy
                    </Link>
                    .
                  </React.Fragment>
                }
              ></Form.Check>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    </div> */

    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        email:"",
        phone:""
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
                      required
                      type="text"
                      name ="firstName"
                      placeholder="First name"
                      value = {values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid = {!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your first name.
                      {/* {errors.firstName} */}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name ="lastName"
                      placeholder="Last name"
                      value = {values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                      isInvalid = {!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    required
                    type="email"
                    name ="email"
                    placeholder="email"
                    value = {values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid = {!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                      name ="phone"
                      placeholder="Phone (optional)"
                      value = {values.phone}
                      onChange={handleChange}
                      isValid={touched.phone && !errors.phone}
                      isInvalid = {!!errors.phone}

                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid phone.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type={showPassword ? "text" : "password"}
                        name ="password"
                        placeholder="password"
                        value = {values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid = {!!errors.password}
                      />
                      <InputGroup.Prepend>
                        <div className="col-1 text-center" onClick={toggleShow}>
                          <FaEye size={32} />
                        </div>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback as={Col} md="12" type="invalid">
                        Please provide a password.
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
                        required
                        type={showPasswordConfirm ? "text" : "password"}
                        name ="passwordConfirm"
                        placeholder="confirm password"
                        value = {values.passwordConfirm}
                        onChange={handleChange}
                        isValid={touched.passwordConfirm && !errors.passwordConfirm}
                        isInvalid = {!!errors.passwordConfirm}
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
                        Please provide a password.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    required
                    name="terms"
                    isInvalid = {!!errors.terms}
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
                <Button type="submit">Submit form</Button>
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
