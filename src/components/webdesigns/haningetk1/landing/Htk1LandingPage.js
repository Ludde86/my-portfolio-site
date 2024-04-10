import React from 'react'
import './htk1landingpage.css'
import NavbarHtk1 from '../navbar/NavbarHtk1'
import Htk1HomePage from '../home/Htk1HomePage'
import SidebarHtk1 from '../sidebar/SidebarHtk1'

const Htk1LandingPage = ({ onSetOpenSidebar, openSidebar }) => {
    return (
        <div className='htk1-landing-container'>
            <NavbarHtk1 openSidebar={openSidebar} />
            <Htk1HomePage openSidebar={openSidebar} />
            <SidebarHtk1 openSidebar={openSidebar} onSetOpenSidebar={onSetOpenSidebar} />
            <div className='htk1-title-container' style={{ opacity: openSidebar && 0.1 }}>
                <h3>Välkommen till</h3>
                <h1>HANINGE TENNISKLUBB</h1>
            </div>
        </div>
    )
}

export default Htk1LandingPage