import React from "react";
import "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import brandlogo from "../../Assets/navcar.svg";

const NavComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="row">
            <div className="col-6">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={brandlogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                XTREMECARS
              </Navbar.Brand>
            </div>

            <div className="col-6">
              <div className="row">
                <Nav className="me-auto">
                  <div className="col">
                    <Nav.Link href="/allcars">NEWCARS</Nav.Link>
                  </div>
                  <div className="col">
                    <Nav.Link href="/">USEDCARS</Nav.Link>
                  </div>
                  <div className="col-4">
                    <Nav.Link href="/">PROFILE</Nav.Link>
                  </div>
                </Nav>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

{
}

export default NavComp;
