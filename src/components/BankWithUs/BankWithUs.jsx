import './bankwithus.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";                                           
import { Autoplay, Pagination, Navigation } from "swiper";

import gift from '../../assets/gift.svg'
import verify from '../../assets/verify.svg'
import lock from '../../assets/lock.svg'
import support from '../../assets/support.svg'
import notification from '../../assets/notification.svg'
import mobilebanking from '../../assets/mobilebanking.svg'
import playstore from '../../assets/playstore.svg'
import card from '../../assets/card.svg'
import flash from '../../assets/flash.svg'
import clock from '../../assets/clock.svg'
import track from '../../assets/track.svg'
import discount from '../../assets/discount.svg'
import checkmachine from '../../assets/check machine.png'
import creditcards from '../../assets/credit cards.png'
import mansavings from '../../assets/man gives his savings to the bank.png'


const BankWithUs = () => {
    return (
            <div className="parent__container">
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
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ display: 'flex'}}>
                        <div className="left__panel">
                            <h3>Bank with us at zero charges for every transactions</h3>
                            <span><img src={gift} alt="gift icon" className='img'/> Open new account for free</span><hr />
                            <span><img src={verify} alt="verify icon" className='img'/> Get verified with ease</span><hr />
                            <span><img src={lock} alt="lock icon" className='img'/> Fully Secured</span><hr />
                            <span><img src={support} alt="support icon" className='img'/> Banking 24/7 support</span><hr />
                            <span><img src={notification} alt="notification icon" className='img'/> Instant notifications</span><hr />
                            <button>Get app on playstore <img src={playstore} alt="app store icon"/></button>
                        </div>
                        <div className='right__panel'>
                            <img src={mobilebanking} alt='a phone performing a mobile banking transaction' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ display: 'flex'}}>
                        <div className="left__panel">
                            <h3>Faultless POS machine</h3>
                            <span><img src={lock} alt="gift icon" className='img'/> Secured transactions </span><hr />
                            <span><img src={card} alt="verify icon" className='img'/> Compactible with any cards</span><hr />
                            <span><img src={flash} alt="support icon" className='img'/> Strong lasting battery</span><hr />
                            <span><img src={verify} alt="notification icon" className='img'/> Accept card & transfer payments</span><hr />
                            <button>Get app on playstore <img src={playstore} alt="app store icon"/></button>
                        </div>
                        <div className='right__panel'>
                            <img src={checkmachine} alt='a phone performing a mobile banking transaction' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ display: 'flex'}}>
                        <div className="left__panel">
                            <h3>A fuctioning visual card</h3>
                            <span><img src={card} alt="gift icon" className='img'/> Make several transactions daily</span><hr />
                            <span><img src={clock} alt="verify icon" className='img'/> 24/7 spending</span><hr />
                            <span><img src={track} alt="lock icon" className='img'/> Track transactions</span><hr />
                            <span><img src={lock} alt="support icon" className='img'/> Highly secured</span><hr />
                            <button>Get app on playstore <img src={playstore} alt="app store icon"/></button>
                        </div>
                        <div className='right__panel'>
                            <img src={creditcards} alt='a phone performing a mobile banking transaction' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ display: 'flex'}}>
                        <div className="left__panel">
                            <h3>A quick loan</h3>
                            <span><img src={card} alt="gift icon" className='img'/> Make several transactions daily</span><hr />
                            <span><img src={discount} alt="verify icon" className='img'/> Interest rate at 10% annually </span><hr />
                            <span><img src={verify} alt="lock icon" className='img'/> Get loan approved in 3 days</span><hr />
                            <button>Get app on playstore <img src={playstore} alt="app store icon"/></button>
                        </div>
                        <div className='right__panel'>
                            <img src={mansavings} alt='a phone performing a mobile banking transaction' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}
export default BankWithUs