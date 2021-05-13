import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import HeaderContent from '../HeaderContent/HeaderContent';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderContent />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;