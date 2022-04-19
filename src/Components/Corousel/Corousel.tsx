import "../../theme/theme.scss";
import { Carousel } from "react-bootstrap";
import "./Corousel.scss";
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
        </Carousel.Item>
      </Carousel>
      <div>
        <CorouselText text="FIND YOUR DREAM CAR"></CorouselText>
      </div>
    </div>
  );
};

export default Header;
