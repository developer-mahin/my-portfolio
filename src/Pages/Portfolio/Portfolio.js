import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import SingleProject from './SingleProject/SingleProject';


// const projectsImage = [
//     {
//         id: 1,
//         image: "https://i.ibb.co/CP0kK0d/projects-1.png",
//         link: "https://computer-zone-2fcc0.web.app/"
//     },
//     {
//         id: 2,
//         image: "https://i.ibb.co/TRY0K6X/projects-3.png",
//         link: "https://law-firm-assignment.web.app/"
//     },
//     {
//         id: 3,
//         image: "https://i.ibb.co/zRVWBjg/projects-2.png",
//         link: "https://doctor-portal-1f882.web.app/"
//     },
//     {
//         id: 4,
//         image: "https://i.ibb.co/BfGdkSf/projects-4.png",
//         link: "https://learn-with-mahin.web.app/"
//     },
// ]

const Portfolio = () => {

    const [projectsImage, setProjectsImage] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("portfolioItems.json")
            .then(res => res.json())
            .then(data => {
                setProjectsImage(data)
                setLoading(false)
            })
    }, [])



    return (
        <>
            {
                loading ? <>

                    <div class="flex items-center justify-center ">
                        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>

                </> : <>

                    <div className=' bg-gray-200'>
                        <div className='lg:py-16 py-6 px-3 container mx-auto'>
                            <h1 className='text-center text-gray-300 text-7xl font-semibold'>Portfolio</h1>
                            <h3 className='text-center text-4xl font-semibold 
            text-gray-800'>My Projects</h3>

                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-20 gap-6 lg:mt-16 mt-6'>
                                {
                                    projectsImage.map(image => <SingleProject
                                        key={image.id}
                                        image={image}
                                    ></SingleProject>)
                                }
                            </div>

                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Portfolio;