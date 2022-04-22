import "../../theme/theme.scss";
import { Carousel } from "react-bootstrap";
import "./Corousel.scss";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { useEffect } from "react";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Searchbox from "../searchbox/searchbox";
import FeaturedCars from "../featuredCars/FeaturedCars";

const HeadCarousel = () => {
  const cars: carDetails[] | null = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).user
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
    console.log(cars);
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className="container containerstyle">
          <Carousel>
            <Carousel.Item interval={1000}>
              {/* <Searchbox /> */}
              <img
                className="d-block w-100"
                src="https://images.carandbike.com/car-images/big/toyota/camry/toyota-camry.webp?v=33"
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
                src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/6775/1584360708758/front-left-side-47.jpg?tr=w-456"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <Searchbox />
      </div>
      <div>
        <FeaturedCars />
      </div>
    </div>
  );
};

export default HeadCarousel;
