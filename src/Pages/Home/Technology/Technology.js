import React from 'react';
import Lottie from "lottie-react";
import tech from "../../../assets/lottie/124016-coding-time.json"
import './Techonology.css'


const imagedata = [
    { id: 1, img: "https://i.ibb.co/smb0vHq/Html.png" },
    { id: 2, img: "https://i.ibb.co/NZJDwpc/css.png" },
    { id: 3, img: "https://i.ibb.co/hsbN5q9/Bootstrap-logo-svg.png" },
    { id: 4, img: "https://i.ibb.co/m4DGVWF/Tailwind-CSS-Logo-svg.png" },
    { id: 5, img: "https://i.ibb.co/n0kBm73/java-Script.png" },
    { id: 6, img: "https://i.ibb.co/8Xpm8Jc/React-icon-svg.png" },
    { id: 7, img: "https://i.ibb.co/nLxFKCs/590px-Node-js-logo-svg.png" },
    { id: 8, img: "https://i.ibb.co/0C5fH6d/download-2-removebg-preview.png" },
    { id: 9, img: "https://i.ibb.co/FKfc3v9/mongo.png" },
    { id: 10, img: "https://i.ibb.co/N6J5kjF/firebase.png" },
    { id: 11, img: "https://i.ibb.co/JcCRqmW/figma.png" },
    { id: 12, img: "https://i.ibb.co/SvqPtST/ai.png" },
    { id: 13, img: "https://i.ibb.co/djTW7qz/ps.png" },
    { id: 13, img: "https://i.ibb.co/WkBf0K0/Word-Press-svg.png" },
]


const Technology = () => {
    return (
        <div className='lg:pt-16 pt-6 px-3'>
            <h1 data-aos="fade-down" className='text-center text-gray-300 lg:text-7xl text-4xl font-semibold'>Technologies I Love To Use</h1>
            <h3 data-aos="fade-down" className='text-center lg:text-xl text-base font-semibold text-gray-800'>PASSIONATE WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                <div data-aos="fade-right">
                    <Lottie animationData={tech} loop={true} />;
                </div>
                <div data-aos="fade-up-right" className='grid lg:grid-cols-7 grid-cols-6 lg:gap-x-4 gap-x-2'>
                    {

                        imagedata.map(img => <>
                            <div className='h-20' key={img.id} >
                                <img className='techImage' src={img.img} alt="" />
                            </div>
                        </>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Technology;