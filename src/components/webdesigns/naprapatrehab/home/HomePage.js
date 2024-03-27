import React from 'react'
import './homePage.css'
import logo from '../naprapatrehab_img/logga-2.png'
import car1 from '../naprapatrehab_img/DSC06580___serialized1.jpeg'
import car2 from '../naprapatrehab_img/DSC06712.jpeg'
import car3 from '../naprapatrehab_img/DSC06565.jpeg'
import car4 from '../naprapatrehab_img/DSC06534.jpeg'
import car5 from '../naprapatrehab_img/DSC06691.jpeg'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HomePage = () => {
    return (
        <div id="napra" className='home-container'>
            <img className='home-container_img' src={logo} alt="logo" width={'100%'} />

            {/* 
            <Carousel className='carousel-container'>
                <div className='carousel-container_img'>
                    <img src={car1} alt='1' />
                   
                </div>
                <div className='carousel-container_img'>
                    <img src={car2} alt='2' />
                </div>
                <div className='carousel-container_img'>
                    <img src={car3} alt='3' />
                </div>
                <div className='carousel-container_img'>
                    <img src={car4} alt='4' />
                </div>
                <div className='carousel-container_img'>
                    <img src={car5} alt='5' />
                </div>
            </Carousel>
            */}

            <div className='home-title_container'>
                <p className='home-title_continer_title'>Naprapatbehandling</p>
                <p className='home-title_continer_title'>Massage</p>
                <p className='home-title_continer_title'>MammaMageträning</p>
            </div>

        </div>
    )
}

export default HomePage