import React from 'react';
import profile from "../../../assets/mahin.png"


const AboutUs = () => {
    return (
        <div className=' lg:pb-16 py-6 px-3'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
            <div data-aos="fade-up">
                <img src={profile} className="rounded-xl" alt="" />
            </div>
            <div data-aos="fade-down">
                <h2 className='text-4xl font-semibold'>About Myself</h2>
                <p className='text-lg'> I’m Mahen Khan A Highly dedicated & creative MERN familiar, Front End Developer. Always passionate about new information & technologies. Striving to never stop learning and improving. Look forward to Working with a creative team to improve my skill and add value. Building easy-to-use, user-friendly websites, and applications is truly a passion of mine. I am an expert in HTML, CSS, Bootstrap, Tailwind, JavaScripts, React, Firebase, ExpressJs, NodeJs, and MongoDB.In addition to my knowledge, I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.</p>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;