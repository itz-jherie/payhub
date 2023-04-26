import { useSwiper } from "swiper/react";
import next from "../assets/nextArrow.svg";
import previous from "../assets/prevArrow.svg";
import "./navBtn.css";

const Navbtns = () => {
  const swiper = useSwiper();
  return (
    <div className="nav-btn-container">
      <span onClick={() => swiper.slidePrev()}>
        <img src={previous} width="50px" height="50px" alt="previous" />
      </span>
      <span onClick={() => swiper.slideNext()}>
        <img src={next} width="50px" height="50px" alt="next" />
      </span>
    </div>
  );
};

export default Navbtns;
