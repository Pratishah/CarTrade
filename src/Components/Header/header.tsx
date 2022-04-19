import Button from "../Button/Button";
import "../../theme/theme.scss";
import { Carousel } from "react-bootstrap";
import "./header.scss";
import CorouselText from "../corouselText/corouselText";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { useEffect } from "react";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";

const contentStyle = {
  padding: "0px",
  height: "30rem",
  color: "#fff",
  lineHeight: "6rem",
  margin: "2rem",
  background: "black",
};

const Search_handle: any = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const Header = () => {
  const cars: carDetails[] | null = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).user
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
    console.log(cars);
  }, [dispatch]);
  return (
    <div className={"head"}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://imgd.aeplcdn.com/1056x594/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=1&q=75"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://imgd.aeplcdn.com/1056x594/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=1&q=75"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgd.aeplcdn.com/1056x594/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=1&q=75"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div>
        <CorouselText text="FIND YOUR DREAM CAR"></CorouselText>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 999999,
          margin: "-13rem",
        }}
      >
        <div>
          <input className={"searchbox"} onChange={Search_handle}></input>
        </div>
        <div>
          <Button height="3rem" width="6rem" children="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
