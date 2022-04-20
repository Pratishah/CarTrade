import React from "react";
import fb from "../../Assets/fb.svg";
import insta from "../../Assets/insta.svg";
import twitter from "../../Assets/twitter.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className="row" style={{ display: "flex" }}>
        <div className="col">
          <h1>Contact</h1>
          <br></br>
          <h3>Book a test drive</h3>
          <h3>BOok Car</h3>
          <h3>Career</h3>
          <h3>COntact-us</h3>
        </div>

        <div className="col">
          <h1>XtremeCars</h1>
          <br />
          <h3>
            12th Floor, Vishwaroop IT Park, Sector 32, Vashi,
            <br />
            Navi Mumbai - 400705. Maharashtra, India.
          </h3>
          <h3>Phone: +91 (22) 612 800000</h3>
        </div>

        <div className="col">
          <h1>Legal</h1>
          <br></br>
          <h3>Legal Disclaimer/Imprint privacy Policy Cookie Policy</h3>
        </div>

        <div className="col">
          <h1>Connect with us</h1>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "0rem",
              padding: "0rem",
            }}
          >
            <div className="footerimg">
              <img src={fb} alt="" />
            </div>
            <div className="footerimg">
              <img src={insta} alt="" />
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
