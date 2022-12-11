import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 items-center justify-center gap-6 py-16 banner px-3'>
            <div className='lg:col-span-2' data-aos="zoom-in-down">
                <img src="https://i.ibb.co/5GvHJ5k/mahin.png" className="lg:w-[450px] lg:h-[450px] w-[350px] h-[350px] rounded-full border-gray-200 border-8 object-cover" alt="" />
            </div>
            <div className='lg:col-span-3' data-aos="fade-left">
                <h2 data-aos="fade-down" className='lg:text-6xl text-3xl font-bold text-gray-700'>Mahen Khan</h2>
                <div className='flex gap-2'>
                    <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">I am a </h3>
                    <h3 className="lg:text-3xl text-xl font-semibold text-gray-600"><Typewriter
                        options={{
                            strings: ['front-end developer', 'React.js developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h3>
                </div>
                <p className='text-lg'> I’m Mahen Khan A Highly dedicated & creative MERN familiar, Front End Developer. Always passionate about new information & technologies. Striving to never stop learning and improving. Look forward to Working with a creative team to improve my skill and add value. Building easy-to-use, user-friendly websites, and applications is truly a passion of mine. I am an expert in HTML, CSS, Bootstrap, Tailwind, JavaScripts, React, Firebase, ExpressJs, NodeJs, and MongoDB.In addition to my knowledge, I consider myself a quick learner, self-motivated, responsible, and disciplined person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.</p>
                <div className='flex items-center mt-4'>
                    <a
                        href="https://drive.google.com/file/d/1Z5Wn4cORBnpx7-bh304lIqb2evd_6QCG/view"
                        target={`_blank`}
                        className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md rounded-br-3xl text-gray-100 font-medium mr-4 flex items-center gap-2 button'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                        </svg>
                        <button>Resume</button>
                    </a>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-gray-100 font-medium button'>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;