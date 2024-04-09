import React, { useState } from 'react'
import './haningetk1.css'
import logo from './assets/img/logga1.jpeg'
import NavbarHtk1 from './navbar/NavbarHtk1'
import SidebarHtk1 from './sidebar/SidebarHtk1'
import Htk1HomePage from './home/Htk1HomePage'

const Haningetk1 = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const onSetOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <div className='haningetk1-container'>
            <NavbarHtk1 openSidebar={openSidebar} />
            <Htk1HomePage openSidebar={openSidebar} />
            <SidebarHtk1 openSidebar={openSidebar} onSetOpenSidebar={onSetOpenSidebar} />
            <div className='htk1-title-container' style={{ opacity: openSidebar && 0.1 }}>
                <h3>Välkommen till</h3>
                <h1>HANINGE TENNISKLUBB</h1>
            </div>
            {/*
            <img className='htl1-logo' src={logo} alt='logo' />
        */}
        </div>
    )
}

export default Haningetk1