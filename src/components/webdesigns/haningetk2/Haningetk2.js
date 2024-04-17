import React from 'react'
import './haningetk2.css'
import NavbarHtk2Page from './navbar/NavbarHtk2Page'
import TopbarPage from './navbar/topbar/TopbarPage'
import LowbarPage from './navbar/lowbar/LowbarPage'
import LandingHtk2Page from './landing/LandingHtk2Page'
import EventHtk2Page from './event/EventHtk2Page'

const Haningetk2 = () => {
    return (
        <div className='htk2_container'>
            <TopbarPage />
            <div className='htk2_container-landing_container'>
                <LandingHtk2Page />
                <EventHtk2Page />
            </div>
            <LowbarPage />
        </div>
    )
}

export default Haningetk2