import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Developer-Mahin.png";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=''>
      <div data-aos="fade-down" className="py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hidden lg:block">
        <div className='flex justify-between container mx-auto px-3'>
          <div className='flex items-center gap-4'>
            <a href="mailto:mahinkhan4238@gmail.com" className='flex items-center gap-2 text-gray-100 font-medium'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Email: mahinkhan4238@gmail.com</span>
            </a>
            <div>
              <a href="tel:+8801785767584" className='flex items-center gap-2 text-gray-100 font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

                <span>Phone: +880 1785 7675 84</span>
              </a>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <a className=' text-gray-100 text-lg' target="blank" href="https://www.linkedin.com/in/md-mahen-khan/">
              <FaLinkedinIn />
            </a>
            <a className=' text-gray-100 text-lg' target="blank" href="https://github.com/developer-mahin">
              <FaGithub />
            </a>
            <a className=' text-gray-100 text-lg' target="blank" href="https://www.facebook.com/mahin.khan.77398/">
              <FaFacebook />
            </a>
            <a className=' text-gray-100 text-lg' target="blank" href="https://twitter.com/MahinKh38241967">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>



      <div data-aos="fade-up" data-aos-easing="ease-out-cubic"  className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-3 lg:py-2">
        <div className="relative flex items-center justify-between">
          <Link
            to=""
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} className="w-80" alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li> <Link className='font-medium hover:text-cyan-500' to="/home">Home</Link></li>

            <li><Link className='font-medium hover:text-cyan-500' to="/portfolio">Portfolio</Link></li>
            <li><Link className='font-medium hover:text-cyan-500' to="/blog">Blog</Link></li>
            <li><Link className='font-medium hover:text-cyan-500' to="/contact">Contact</Link></li>
            <li><a target="blank" href="https://drive.google.com/file/d/1Z5Wn4cORBnpx7-bh304lIqb2evd_6QCG/view?usp=share_link" className='font-medium hover:text-cyan-500'>Download resume</a></li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to=""
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} class alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">

                      <li> <Link to="/home">Home</Link></li>
                      <li><Link to="/portfolio">Portfolio</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><a target="blank" href="https://drive.google.com/file/d/1Z5Wn4cORBnpx7-bh304lIqb2evd_6QCG/view?usp=share_link">Download resume</a></li>


                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;