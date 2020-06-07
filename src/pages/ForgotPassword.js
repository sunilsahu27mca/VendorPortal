import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const ForgotPassword = () => {
  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <MDBCard className="mt-4 mb-4">
            <MDBCardBody className="mx-4">
              <form>
                <p className="h4 text-center py-4">Forgot Password</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  {/* <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn> */}
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ForgotPassword;