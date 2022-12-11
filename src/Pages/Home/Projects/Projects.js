import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import { FreeMode, Pagination } from "swiper";



const projectsImage = [
    { id: 1, image: "https://i.ibb.co/CP0kK0d/projects-1.png" },
    { id: 2, image: "https://i.ibb.co/zRVWBjg/projects-2.png" },
    { id: 3, image: "https://i.ibb.co/TRY0K6X/projects-3.png" },
    { id: 4, image: "https://i.ibb.co/BfGdkSf/projects-4.png" },
]

const Projects = () => {
    return (
        <div className="py-20 px-3">
            <h1 className='text-center text-gray-300 text-7xl font-semibold' data-aos="fade-right">Projects</h1>
            <h3 className='text-center text-4xl font-semibold text-gray-800' data-aos="fade-left">Recent Projects</h3>
            <div className="grid lg:grid-cols-4 grid-cols-1 mt-4">
                <div>

                </div>
                <div data-aos="flip-right" className="col-span-3">
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
                            {
                                projectsImage.map(image => <SwiperSlide key={image.id}>
                                    <PhotoProvider>
                                        <PhotoView src={image.image}>
                                            <img className="object-cover object-top" src={image.image} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
}



export default Projects;