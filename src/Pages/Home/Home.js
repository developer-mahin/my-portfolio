import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Technology from './Technology/Technology';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <Technology></Technology>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;