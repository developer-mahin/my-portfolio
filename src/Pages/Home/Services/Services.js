import React from 'react';
import webpage from "../../../assets/icon/webpage.png"
import ecommmerce from "../../../assets/icon/online-shop.png"
import problem from "../../../assets/icon/hypothesis.png"
import optimimzation from "../../../assets/icon/monitoring.png"
import meeting from "../../../assets/icon/meeting.png"
import coding from "../../../assets/icon/coding.png"

const Services = () => {
    return (
        <div className='lg:py-16 py-6 px-3'>
            <h1 className='text-center text-gray-300 text-7xl font-semibold'>SERVICES</h1>
            <h3 className='text-center text-4xl font-semibold text-gray-800'>What I Do</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-6'>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={webpage} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Fixing problems</h3>
                        <p className='text-center'>Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.</p>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={ecommmerce} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Online store & shopping</h3>
                        <p className='text-center'>I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.</p>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={problem} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Fixing problems</h3>
                        <p className='text-center'>Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.</p>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={optimimzation} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Maintenance & Optimized</h3>
                        <p className='text-center'>Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here.</p>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={meeting} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Discussion</h3>
                        <p className='text-center'>To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.</p>
                    </div>
                </div>

                <div className='border shadow-lg rounded-lg p-6'>
                    <div className='flex justify-center items-center'>
                        <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                            <img className='w-16 h-16 ' src={coding} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-gray-700 text-center'>Coding</h3>
                        <p className='text-center'>The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;