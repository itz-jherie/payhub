import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./whypayhub.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCards,
} from "swiper";
import Navbtns from "../Navbtns";
import transfer from "../../assets/transferLogo.svg";
import loan from "../../assets/loanMgt.svg";
import invest from "../../assets/invest.svg";
import vCards from "../../assets/virtualCards.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const WhyPayhub = () => {
  const [pages, setPages] = useState(4);
  const large = useMediaQuery({ query: "(min-width: 1250px)" });
  const medium = useMediaQuery({ query: "(min-width: 750px)" });
  const small = useMediaQuery({ query: "(min-width: 550px)" });
  useEffect(() => {
    if (large) {
      setPages(4);
    } else if (medium) {
      setPages(2);
    } else if (small) {
      setPages(1);
    }
  }, [medium, small, large]);
  return (
    <>
      <div className="whypayhub-container">
        <div className="why">
          <p>Why Payhub</p>
          <span>What's special about payhub?</span>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={20}
          slidesPerView={pages}
          navigation
          freeMode={true}
          scrollbar={{ draggable: true }}
          keyboard={true}
        >
          <SwiperSlide className="slide">
            <img src={transfer} width="100px" height="100px" />
            <p>MONEY TRANSFERS</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus mauris
              feugiat enim placerat erat vel condimentum. Pellentesque{" "}
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={loan} width="100px" height="100px" />
            <p>LOAN MANAGEMENT</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus mauris
              feugiat enim placerat erat vel condimentum. Pellentesque{" "}
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={invest} width="100px" height="100px" />
            <p>INVESTMENT MANAGEMENT</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus mauris
              feugiat enim placerat erat vel condimentum. Pellentesque{" "}
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={vCards} width="100px" height="100px" />
            <p>VIRTUAL CARDS</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus mauris
              feugiat enim placerat erat vel condimentum. Pellentesque{" "}
            </span>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={transfer} width="100px" height="100px" />
            <p>MONEY TRANSFERS</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus mauris
              feugiat enim placerat erat vel condimentum. Pellentesque{" "}
            </span>
          </SwiperSlide>
          <Navbtns />
        </Swiper>
      </div>
      <div className="mobile">
        <div className="mobile-swipe">
          <div className="why">
            <p>Why Payhub</p>
            <span>What's special about payhub?</span>
          </div>

          <div className="mobile-cards">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide className="slide2">
                <img src={transfer} width="100px" height="100px" />
                <p>MONEY TRANSFERS</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus
                  mauris feugiat enim placerat erat vel condimentum.
                  Pellentesque{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="slide2">
                <img src={transfer} width="100px" height="100px" />
                <p>MONEY TRANSFERS</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus
                  mauris feugiat enim placerat erat vel condimentum.
                  Pellentesque{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="slide2">
                <img src={transfer} width="100px" height="100px" />
                <p>MONEY TRANSFERS</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus
                  mauris feugiat enim placerat erat vel condimentum.
                  Pellentesque{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="slide2">
                <img src={transfer} width="100px" height="100px" />
                <p>MONEY TRANSFERS</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ipsum cursus lectus
                  mauris feugiat enim placerat erat vel condimentum.
                  Pellentesque{" "}
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPayhub;
