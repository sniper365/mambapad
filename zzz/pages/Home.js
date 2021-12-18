import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Hero from '../components/Home/Hero';
import MainFeatures from '../components/Home/MainFeatures';
import TierSystem from '../components/Home/TierSystem';
import RoadMap from '../components/Home/RoadMap';
import Partners from '../components/Home/Partners';
import Team from '../components/Home/Team';

export default function Home() {

    return (
        <>
            <Header />
            <Background />
            <Hero />
            <MainFeatures />
            <TierSystem />
            <RoadMap />
            <Partners />
            <Team />
            <Footer />
        </>
    )
}