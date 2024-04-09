import React, { useState } from 'react'
import './haningetk1.css'
import Htk1AboutPage from './about/Htk1AboutPage'
import Htk1LandingPage from './landing/Htk1LandingPage'
import Htk1VisionsPage from './visions/Htk1VisionsPage'

const Haningetk1 = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const onSetOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <div>
            <Htk1LandingPage onSetOpenSidebar={onSetOpenSidebar} openSidebar={openSidebar} />
            <Htk1AboutPage />
            <Htk1VisionsPage />
            {/*
            <img className='htl1-logo' src={logo} alt='logo' />
        */}
        </div>
    )
}

export default Haningetk1