import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import HTML from "../../../assets/tech/Html.png"
import CSS from "../../../assets/tech/css.png"
import Bootstrap from "../../../assets/tech/Bootstrap-logo-svg.png"
import tailwind from "../../../assets/tech/Tailwind-CSS-Logo-svg.png"
import javaScript from "../../../assets/tech/javaScript.png"
import react from "../../../assets/tech/React-icon-svg.png"
import node from "../../../assets/tech/590px-Node-js-logo-svg.png"
import express from "../../../assets/tech/download-2-removebg-preview.png"
import mongo from "../../../assets/tech/mongo.png"
import wordpress from "../../../assets/tech/WordPress.svg.png"


const Skills = () => {
    return (
        <div className='py-6 md:py-0'>
            <h1 className='text-center text-gray-300 text-7xl font-semibold'>Skills</h1>
            <h3 className='text-center text-4xl font-semibold text-gray-800'>My Top Skills</h3>

            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-6 items-center justify-center px-3'>
                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={HTML} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={CSS} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={Bootstrap} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={tailwind} className="w-14" alt="" />
                    </div>
                </div>
                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={javaScript} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={react} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={node} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={express} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={mongo} className="w-14" alt="" />
                    </div>
                </div>

                <div className='border shadow-xl rounded-xl p-8'>
                    <div className='flex justify-center items-center'>
                        <ProgressBar width="230" trackWidth="13" percentage="60" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={wordpress} className="w-14" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;