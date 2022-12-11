import React from 'react';
import "./Skills.css"


const Skills = () => {

    const skills = [
        { id: 1, img: "https://i.ibb.co/smb0vHq/Html.png" },
        { id: 2, img: "https://i.ibb.co/NZJDwpc/css.png" },
        { id: 3, img: "https://i.ibb.co/hsbN5q9/Bootstrap-logo-svg.png" },
        { id: 4, img: "https://i.ibb.co/m4DGVWF/Tailwind-CSS-Logo-svg.png" },
        { id: 5, img: "https://i.ibb.co/n0kBm73/java-Script.png" },
        { id: 6, img: "https://i.ibb.co/8Xpm8Jc/React-icon-svg.png" },
        { id: 7, img: "https://i.ibb.co/N6J5kjF/firebase.png" },
        { id: 8, img: "https://i.ibb.co/nLxFKCs/590px-Node-js-logo-svg.png" },
        { id: 9, img: "https://i.ibb.co/FKfc3v9/mongo.png" },
        { id: 10, img: "https://i.ibb.co/0C5fH6d/download-2-removebg-preview.png" },
        { id: 11, img: "https://i.ibb.co/WkBf0K0/Word-Press-svg.png" },
        { id: 12, img: "https://ps.w.org/elementor/assets/icon.svg?rev=2597493" },
        { id: 13, img: "https://i.ibb.co/vxQf0Rq/divi-logo-sq.png" },
        { id: 14, img: "https://www.pngkey.com/png/full/119-1194431_woocommerce-icon-wordpress-woocommerce.png" },
    ]


    return (
        <div className='py-6 md:py-0'>
            <h1 data-aos="fade-right" className='text-center text-gray-300 text-7xl font-semibold'>Skills</h1>
            <h3 data-aos="fade-left" className='text-center text-4xl font-semibold text-gray-800'>My Top Skills</h3>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-6 items-center justify-items-center lg:mt-16 mt-6'>

                {
                    skills.map(skill => <div data-aos="fade-up" className='border shadow-xl rounded-xl p-14 skillImg' key={skill.id}>

                        <img className='w-16 h-16 skillImg' src={skill.img} alt="" />

                    </div>)
                }

            </div>


        </div>
    );
};

export default Skills;