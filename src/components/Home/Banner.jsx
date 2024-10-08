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
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/fFBT7Xr/coxsbazar.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Cox&apos;s Bazar, <br /> Bangladesh</h1>
                                <p className="mb-5">Cox&apos;s Bazar, Bangladesh: Longest natural sea beach, vibrant culture, seafood delights, and stunning sunsets attract tourists worldwide.</p>
                                <a href='#explore' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/wJn3MPw/Ha-Long-Bay.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Ha Long Bay, <br /> Vietnam</h1>
                                <p className="mb-5">UNESCO World Heritage site, iconic limestone karsts, emerald waters, scenic boat tours, and rich cultural heritage allure visitors.</p>
                                <a href='#explore' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/CPjPHGq/kuawalampur.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Kuala Lumpur, <br /> Malaysia</h1>
                                <p className="mb-5">Kuala Lumpur: vibrant capital of Malaysia, known for its diverse culture, iconic Petronas Towers, bustling markets, and delicious street food.</p>
                                <a href='#explore' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/RT0dWf5/bankok.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Bangkok, <br /> Thailand</h1>
                                <p className="mb-5">Bangkok: Thailand&apos;s bustling capital, famous for ornate temples, vibrant street life, floating markets, and exquisite cuisine blending sweet, sour, and spicy flavors.</p>
                                <a href='#explore' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;