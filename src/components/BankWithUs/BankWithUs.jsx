import './bankwithus.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";                                           
import { Autoplay, Pagination, Navigation } from "swiper";


const BankWithUs = () => {
    return (
        <div className="bankwithus__container">
            <div className="mobile__panel"></div>
            <div className="desktop__panel">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="left__div">Slide 1</div>
                        <div className="left__div">Slide 2</div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="desktop-left__panel"></div>
                <div className="desktop-right__panel"></div> */}
            </div>
        </div>
    )
}
export default BankWithUs