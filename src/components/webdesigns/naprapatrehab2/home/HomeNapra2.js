import React from 'react'
import './homeNapra2.css'

import car1 from '../assets/img/DSC06580___serialized1.jpeg'
import car2 from '../assets/img/DSC06712.jpeg'
import car3 from '../assets/img/DSC06565.jpeg'
import car4 from '../assets/img/DSC06534.jpeg'
import car5 from '../assets/img/DSC06691.jpeg'
import { Carousel } from 'react-responsive-carousel';

const HomeNapra2 = () => {
    return (
        <div className='home_napra2-container'>
            <div className='home_napra2-container_first-page'>
                <div className='home_napra2-container_first-page_text-container'>
                    <h2 className='home_napra2-container_first-page_text-container_title'>
                        Välkomna till Naprapat & Rehabcenter i Haninge!
                    </h2>
                    <div className='booking'>
                        <p className='home_napra2-container_first-page_text-container_text'>
                            Naprapati
                        </p>
                        <p className='home_napra2-container_first-page_text-container_text'>
                            Massage
                        </p>
                        <p className='home_napra2-container_first-page_text-container_text'>
                            Friskvård
                        </p>
                        <p className='home_napra2-container_first-page_text-container_text'>
                            Rehab
                        </p>
                        <a id="booking-button" className='home_napra2-container_first-page_text-container_text' href='https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747' target='_blank' rel="noreferrer">
                            Boka Direkt
                        </a>
                    </div>
                </div>
            </div>
            <div className='home_napra2-container_carousel-container'>
                <div className='about-container'>
                    <h1 className='about-container_title'>Naprapat & Rehabcenter Haninge</h1>
                    <p className='about-container_text'>Naprapatklinik i Haninge, 2 mil söder om Stockholm.</p>
                    <p className='about-container_text'>Drivs och ägs idag av tre legitimerade naprapater Line Jonasson (0704540923), Sofie Schmidt (0702443473) och Susanne Nyström (0704530288).</p>
                    <p className='about-container_text'>Hos oss kan du betala med swish, kort, presentkort. </p>
                    <p className='about-container_text'>Vi är även anslutna till friskvårdsportalerna Wellnet, Actiway och Min Friskvård (friskvårdskuponger) samt försäkringsbolagsförmedlare: Falck Healthcare (DKV hälsa, SEB), Nordic Netcare (IF) och SOS International.</p>
                </div>
                <Carousel className='home_napra2-container_carousel-container_carousel'>
                    <div className='home_napra2-container_carousel-container_carousel_img'>
                        <img src={car1} alt='1' />
                        {/*
                        <p className="legend">Legend 1</p>
                        */}

                    </div>

                    <div className='home_napra2-container_carousel-container_carousel_img'>
                        <img src={car3} alt='3' />
                    </div>
                    <div className='home_napra2-container_carousel-container_carousel_img'>
                        <img src={car4} alt='4' />
                    </div>
                    <div className='home_napra2-container_carousel-container_carousel_img'>
                        <img src={car2} alt='2' />
                    </div>
                    <div className='home_napra2-container_carousel-container_carousel_img'>
                        <img src={car5} alt='5' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HomeNapra2