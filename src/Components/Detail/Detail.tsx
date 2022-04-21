import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { json } from "stream/consumers";
import Button from "../Button/Button";
import "./Detail.scss";
import bmw1 from "../../Assets/bmw1.svg";
import bmw2 from "../../Assets/bmw2.svg";
import seat3 from "../../Assets/seat3.svg";
import interior4 from "../../Assets/Interior4.svg";

const Detail = (props: any) => {
  const carid = useParams();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Form";
    navigate(path);
  };

  //   <div>{JSON.stringify(carid)}.id</div>;

  return (
    <div className="detailcontainer container-fluid ">
      <div className="row firstrow">
        <div className="col">
          <h1 className="carname">{carid.id}</h1>
        </div>
        <div className="col">
          <h3>Car Specifications</h3>
          <br />
        </div>
      </div>

      <div className="row firstrow">
        <div className="col  img-fluid">
          <img className="image" src={bmw1} alt="" />
        </div>
        <div className="col">
          <div className="box">
            <p>
              <b>Fuel Type:</b>
            </p>

            <p>Petrol and Diesel</p>
          </div>
          <div className="box">
            <p>
              <b>Engine:</b>
            </p>
            <p>2993 to 2998 C</p>
          </div>
          <div className="box">
            {" "}
            <p>
              <b>Torque</b>
            </p>
            <p>450 to 620 Nm</p>
          </div>
          <div className="box">
            <p>
              <b>Acceleration</b>
            </p>
            <p>5.5 to 6.5 seconds</p>
          </div>
          <div className="box">
            <p>
              <b>Top Speed</b>
            </p>
            <p>230 to 243 kmph</p>
          </div>
          <div className="box">
            {" "}
            <p>
              <b>Variants</b>
            </p>
            <p>
              The BMW X5 comes in four distinctive trims starting
              <br />. with the entry-level X5 xDrive40i SportX Plus, xDrive30d
              <br />
              SportX Plus, xDrive30d Luxury Line and xDrive40i M Sport.
            </p>
          </div>
        </div>
      </div>

      <div className="row firstrow">
        <div className="col">
          {" "}
          <img className="image" src={bmw2} alt="" />
        </div>
        <div className="col">
          <br />
          <h3>Exteriors</h3>
          <div className="exterior"></div>
          <br />
          <div className="box">
            <p>
              This mid-size SUV measures 4,922mm in length and has a 2,975mm
              wheelbase. Besides, BMW has given it a one-piece kidney grille
              with flashy chrome trimming and large air inlets in the front
              bumper.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row firstrow">
        <div className="col img-fluid">
          {" "}
          <img className="bottomseatimage" src={seat3} alt="" />
          <br />
          <img className="bottomseatimage" src={interior4} alt="" />
        </div>
        <div className="col">
          <h3>Interior finishes</h3>
          <br />
          <div className="box">
            <p>
              X5 has a high-end cockpit Vernasca leather upholstery
              <br /> for the seats A panoramic sunroof Four-zone temperature
              control
              <br /> BMW display key, heads-up display, parking and reversing{" "}
              <br />
              assistance Surround-view cameras and attentiveness attention.
            </p>
          </div>
          <div className="row">
            <div className="col-2">
              <b>Cost</b>
            </div>
            <div className="col-2">76.5L</div>

            <div className="col-8"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <Button height="2rem" onClick={routeChange}>
                Buynow
              </Button>
            </div>

            <div className="col-8"></div>
          </div>
        </div>
      </div>

      {/* {carid.id}
        <div className="buybutton">
          <Button height="2rem" onClick={routeChange}>
            Buynow
          </Button>
        </div> */}
    </div>
  );
};

export default Detail;
