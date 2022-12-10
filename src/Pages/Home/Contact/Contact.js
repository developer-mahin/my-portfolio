import React from 'react';
import mailbox from "../../../assets/lottie/30851-mail-boxletter-box.json"
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <div className='lg:pt-20 pt-6 lg:pb-0 pb-6 px-3'>
            <h1 className='text-center text-gray-300 text-7xl font-semibold'>CONTACT</h1>
            <h3 className='text-center text-4xl font-semibold text-gray-800'>Get in touch</h3>
            <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center'>
                <div>
                    <Lottie animationData={mailbox} loop={true} />;
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <input
                        type="number"
                        name='phone'
                        placeholder='Enter phone number'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <textarea
                        name="message"
                        placeholder='Message.....'
                        className='w-full h-20 mb-3 rounded-lg border px-4 py-3'
                        id=""
                    ></textarea>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-md rounded-br-3xl text-gray-100 font-medium button' type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;