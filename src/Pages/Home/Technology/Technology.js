import React from 'react';
import Lottie from "lottie-react";
import tech from "../../../assets/lottie/124016-coding-time.json"
import HTML from "../../../assets/tech/Html.png"
import CSS from "../../../assets/tech/css.png"
import Bootstrap from "../../../assets/tech/Bootstrap-logo-svg.png"
import tailwind from "../../../assets/tech/Tailwind-CSS-Logo-svg.png"
import javaScript from "../../../assets/tech/javaScript.png"
import react from "../../../assets/tech/React-icon-svg.png"
import node from "../../../assets/tech/590px-Node-js-logo-svg.png"
import express from "../../../assets/tech/download-2-removebg-preview.png"
import firebase from "../../../assets/tech/firebase.png"
import mongo from "../../../assets/tech/mongo.png"
import figma from "../../../assets/tech/figma.png"
import ai from "../../../assets/tech/ai.png"
import ps from "../../../assets/tech/ps.png"
import wordpress from "../../../assets/tech/WordPress.svg.png"


const Technology = () => {
    return (
        <div className='lg:pt-16 pt-6 px-3'>
            <h1 className='text-center text-gray-300 lg:text-7xl text-4xl font-semibold'>Technologies I Love To Use</h1>
            <h3 className='text-center lg:text-xl text-base font-semibold text-gray-800'>PASSIONATE WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                <div>
                    <Lottie animationData={tech} loop={true} />;
                </div>
                <div className='grid lg:grid-cols-7 grid-cols-6 lg:gap-x-4 gap-x-2'>
 
                        <div className='h-20'><img className='' src={HTML} alt="" /></div>
                        <div className='h-20'><img className='' src={CSS} alt="" /></div>
                        <div className='h-20'><img className='' src={Bootstrap} alt="" /></div>
                        <div className='h-20'><img className='' src={tailwind} alt="" /></div>
                        <div className='h-20'><img className='' src={javaScript} alt="" /></div>
                        <div className='h-20'><img className='' src={react} alt="" /></div>
                        <div className='h-20'><img className='' src={node} alt="" /></div>
                        <div className='h-20'><img className='' src={express} alt="" /></div>
                        <div className='h-20'><img className='' src={mongo} alt="" /></div>
                        <div className='h-20'><img className='' src={firebase} alt="" /></div>
                        <div className='h-20'><img className='' src={figma} alt="" /></div>
                        <div className='h-20'><img className='' src={ai} alt="" /></div>
                        <div className='h-20'><img className='' src={ps} alt="" /></div>
                        <div className='h-20'><img className='' src={wordpress} alt="" /></div>

                </div>
            </div>

        </div>
    );
};

export default Technology;