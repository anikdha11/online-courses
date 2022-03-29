import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Courses from '../Courses/Courses';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;