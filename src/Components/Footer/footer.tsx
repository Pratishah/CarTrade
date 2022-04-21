import React from "react";
import fb from "../../Assets/fb.svg";
import insta from "../../Assets/insta.svg";
import twitter from "../../Assets/twitter.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container footpad">
      <div className="row footpad" style={{ display: "flex" }}>
        <div className="col">
          <h5>Contact</h5>

          <p>
            Book a test drive
            <br />
            Book Car
            <br />
            Career
            <br />
            Contact-us
          </p>
        </div>

        <div className="col">
          <h5>XtremeCars</h5>

          <p>
            12th Floor, Vishwaroop IT Park, Sector 32, Vashi,
            <br />
            Navi Mumbai - 400705. Maharashtra, India.
            <br />
            Phone: +91 (22) 612 800000
          </p>
        </div>

        <div className="col">
          <h5>Legal</h5>

          <p>Legal Disclaimer/Imprint privacy Policy Cookie Policy</p>
        </div>

        <div className="col">
          <h5>Connect with us</h5>

          <div
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "space-evenly",
            //   margin: "0rem",
            //   padding: "0rem",
            // }}
            className="footerimgcontainer"
          >
            <div className="footerimg container">
              <img src={fb} alt="" />
              <br />
            </div>
            <div className="footerimg">
              <img src={insta} alt="" />
              <br />
            </div>
            <div className="footerimg">
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
