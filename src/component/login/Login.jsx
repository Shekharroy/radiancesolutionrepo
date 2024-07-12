import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import "./Login.css";

const Login = () => {
  // Predefined valid credentials
  const validCredentials = {
    userID: "admin@abc.com",
    password: "password123",
  };

  // State variables to hold user input
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handler for the submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate user input against predefined credentials
    if (
      userID === validCredentials.userID &&
      password === validCredentials.password
    ) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid user ID or password.");
    }
  };
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6" className="mediaXc">
          <img
            src="https://radiancesolution.com/wp-content/uploads/2019/11/header-home3.png"
            className="img-fluid"
            alt="banner"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row mt-2 mediaLogo">
            <img
              src="https://radiancesolution.com/wp-content/uploads/2020/09/Radiance-Solutions-logo.png"
              width="100px"
              height="100px"
              className="img-fluid"
              alt="Logo"
            />
          </div>

          <h5
            className="fw-normal my-4 pb-3"
            style={{ letterSpacing: "1px", color: "#000000" }}
          >
            Sign into your account
          </h5>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#" style={{ color: "#000000" }}>
                Forgot password?
              </a>
            </div>

            <MDBBtn
              className="mb-4 w-100 btn-gridHover"
              size="lg"
              style={{
                background:
                  "linear-gradient(to right, rgba(251, 107, 20, 0.9), rgba(253, 181, 34, 0.9))",
              }}
            >
              Sign in
            </MDBBtn>
          </form>
          {message && <p className="text-center" style={{color:"red"}}>{message}</p>}
          <div className="text-center">
            <p style={{ color: "#000000" }}>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
