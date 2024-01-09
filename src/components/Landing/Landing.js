import React from 'react';
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';
import Testimonials from '../../components/Testimonials/Testimonials';
import Virtual from '../../components/Virtual/Virtual'


const Landing = () => {
    return (
        <div>
            <Hero />
            <Slider />
            <Virtual />
            <Products />
            <Testimonials />
        </div>
    );
};

export default Landing;