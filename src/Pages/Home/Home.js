import React from 'react';
import Banner from './Banner/Banner';
import ContactSection from '../../Components/Shared/ContactSection/ContactSection';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Technology from './Technology/Technology';
import Projects from './Projects/Projects';
import AboutUs from './About/AboutUs';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <Technology></Technology>
            <AboutUs></AboutUs>
            <Skills></Skills>
            <Projects></Projects>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;