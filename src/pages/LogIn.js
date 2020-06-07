import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './LogIn.css';


class LogIn extends Component {
    render() {
      return (
        <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="6">
                <MDBCard className="mt-4 mb-4">
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong >Sign in</strong>
                      </h3>
                    </div>
                    <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />
                    <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    />
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                      <Link to={'/ForgotPassword'} activeClassName="active">Forgot Password?</Link>
                    </p>
                    <div className="text-center mb-3">
                       {/* <MDBBtn
                        type="button"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Sign in
                      </MDBBtn>  */}
                    </div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                      or Sign in with:
                    </p>
                    <div className="row my-3 d-flex justify-content-center">
                      {/* <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a"
                      >
                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                      </MDBBtn>
                      <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="mr-md-3 z-depth-1a"
                      >
                        <MDBIcon fab icon="twitter" className="blue-text" /> 
                      </MDBBtn> */}
                      {/* <MDBBtn
                        type="button"
                        color="white"
                        rounded
                        className="z-depth-1a"
                      >
                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                      </MDBBtn> */}
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Not a member?
                      <Link to={'/signup'} activeClassName="active">Sign Up</Link>
                    </p>
                  </MDBModalFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      );
    }
  }
  
  export default LogIn;