import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import projects1 from "../../../assets/projects/projects-1.png"
import projects2 from "../../../assets/projects/projects-2.png"
import projects3 from "../../../assets/projects/projects-3.png"
import projects4 from "../../../assets/projects/projects-4.png"

const Portfolio = () => {
    return (

        <div className="py-20 px-3">
            <h1 className='text-center text-gray-300 text-7xl font-semibold'>Portfolio</h1>
            <h3 className='text-center text-4xl font-semibold text-gray-800'>Recent Projects</h3>
            <div className="grid lg:grid-cols-4 grid-cols-1 mt-4">
                <div>

                </div>
                <div className="col-span-3">
                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <PhotoProvider>
                                    <PhotoView src={projects1}>
                                        <img src={projects1} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </SwiperSlide>
                            <SwiperSlide>
                                <PhotoProvider>
                                    <PhotoView src={projects2}>
                                        <img src={projects2} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </SwiperSlide>
                            <SwiperSlide>
                                <PhotoProvider>
                                    <PhotoView src={projects3}>
                                        <img src={projects3} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </SwiperSlide>
                            <SwiperSlide>
                                <PhotoProvider>
                                    <PhotoView src={projects4}>
                                        <img src={projects4} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </SwiperSlide>

                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
}



export default Portfolio;