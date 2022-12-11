import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from "react-router-dom"


const SingleProject = ({ image }) => {

    return (
        <div data-aos="flip-left">
            <div >
                <PhotoProvider>
                    <PhotoView src={image.image}>
                        <div className='portfolio-image'>
                            <img className="h-96 w-[402px] object-cover object-top rounded-[20px] " src={image.image} alt="" />
                        </div>
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='text-center mt-6 '>
                <a 
                target="blank"
                href={image.github_client} 
                    className='px-8 py-4 mr-4 text-white font-medium buttonRadius'
                >
                    Github Client
                </a>
                <a
                    href={image.link}
                    target="blank"
                    className='px-8 py-4 text-white font-medium buttonRadius'
                >
                    Live link
                </a>
            </div>
        </div>
    );
};

export default SingleProject;