import React from 'react'
import './servicesNapra2.css'
import service1 from '../assets/img/DSC06469.jpeg'
import service2 from '../assets/img/DSC06565.jpeg'
import service3 from '../assets/img/DSC06362.jpeg'

const ServicesNapra2 = () => {
    return (
        <div className='services_napra2-container'>

            <div className='services_napra2-container_first-page'>
                <div id='services_napra2-container_first-page1' className='services_napra2-container_first-page_img-container'>

                </div>
                <div className='services_napra2-container_first-page_text-container'>
                    <h2 className='services_napra2-container_first-page_text-container_title'>
                        Naprapatbehandling nybesök/återbesök
                    </h2>
                    <h2 className='services_napra2-container_first-page_text-container_subtitle'>
                        30-40 min
                    </h2>

                    <p className='services_napra2-container_first-page_text-container_text'>
                        Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder. Naprapatbehandlingen syftar till att återställa kroppens normala rörlighet och funktion samt minska smärtan.
                    </p>
                    <p className='services_napra2-container_first-page_text-container_text'>
                        För att uppnå detta tillämpas olika behandlingsmetoder och tekniker som ex. ledmanipulation och mobilisering, mjukdelsbehandling som massage, stretching, men även TENS och dry needling.
                    </p>

                    {/*
                        <a id="booking-button" className='services_napra2-container_first-page_text-container_text' href='https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747' target='_blank' rel="noreferrer">
                        Boka Direkt
                        </a>
                        */}

                </div>
            </div>

            <div className='services_napra2-container_first-page'>
                <div id='services_napra2-container_first-page2' className='services_napra2-container_first-page_img-container'>
                </div>
                <div className='services_napra2-container_first-page_text-container'>
                    <h2 className='services_napra2-container_first-page_text-container_title'>
                        Naprapatbehandling pensionär/student
                    </h2>
                    <h2 className='services_napra2-container_first-page_text-container_subtitle'>
                        30-40 min
                    </h2>

                    <p className='services_napra2-container_first-page_text-container_text'>
                        Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder. Naprapatbehandlingen syftar till att återställa kroppens normala rörlighet och funktion samt minska smärtan.
                    </p>
                    <p className='services_napra2-container_first-page_text-container_text'>
                        För att uppnå detta tillämpas olika behandlingsmetoder och tekniker som ex. ledmanipulation och mobilisering, mjukdelsbehandling som massage, stretching, men även TENS och dry needling.
                    </p>

                </div>
            </div>

            <div className='services_napra2-container_first-page'>
                <div id='services_napra2-container_first-page3' className='services_napra2-container_first-page_img-container'>
                </div>
                <div className='services_napra2-container_first-page_text-container'>
                    <h2 className='services_napra2-container_first-page_text-container_subtitle'>
                        Massage 30 min
                    </h2>

                    <p className='services_napra2-container_first-page_text-container_text'>
                        Denna tjänst är till för dig som inte söker för några specifika besvär utan önskar enklare mjukdelsbehandling i form av massage, triggerpunktsbehandling och stretch.

                        Vi lägger lite extra fokus på de områden i kroppen där du har mer muskulära spänningar.
                    </p>



                </div>
            </div>

        </div>
    )
}

export default ServicesNapra2