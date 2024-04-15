import React, { useState, useEffect } from 'react'
import './haningetk1.css'
import Htk1AboutPage from './about/Htk1AboutPage'
import Htk1LandingPage from './landing/Htk1LandingPage'
import Htk1VisionsPage from './visions/Htk1VisionsPage'
import Htk1FooterPage from './footer/Htk1FooterPage'

const Haningetk1 = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    /*
    const mediaQueryCondition = window.matchMedia('( max-width: 800px )').matches;

    useEffect(() => {
        if (mediaQueryCondition) {
            window.scrollTo(0, 50);
        } else {
            window.scrollTo(0, 120);
        }
    }, [])
    */


    const onSetOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <div id='home'>
            <Htk1LandingPage onSetOpenSidebar={onSetOpenSidebar} openSidebar={openSidebar} />
            <Htk1AboutPage />
            <Htk1VisionsPage />
            <Htk1FooterPage />
            {/*
            <img className='htl1-logo' src={logo} alt='logo' />
        */}
        </div>
    )
}

export default Haningetk1