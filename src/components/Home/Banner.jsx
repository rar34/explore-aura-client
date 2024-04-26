import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Banner = () => {
    return (
        <div className='my-4'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
            >


                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/XLqWtZS/1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Luxury Villa with Ocean View</h1>
                                <p className="mb-5">Stunning luxury villa with breathtaking ocean views. Spacious living areas, modern kitchen, and private swimming pool.</p>
                                <a href='#products' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/KF4tyPk/2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Cozy Townhouse in Historic District</h1>
                                <p className="mb-5">Charming townhouse located in a historic district. Renovated interior with exposed brick walls and a cozy fireplace.</p>
                                <a href='#products' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/Qp4c969/3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Modern Downtown Apartment</h1>
                                <p className="mb-5">Sleek and modern apartment in the heart of the city. Floor-to-ceiling windows offer panoramic city views.</p>
                                <a href='#products' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/ypnSYwf/4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Student Housing Near Campus</h1>
                                <p className="mb-5">Convenient student housing just steps away from campus. Fully furnished with modern amenities.</p>
                                <a href='#products' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;