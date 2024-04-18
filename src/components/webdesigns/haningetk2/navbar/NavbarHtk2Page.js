import React from 'react'
import './navbarhtk2page.css'
import TopbarPage from './topbar/TopbarPage'
import LowbarPage from './lowbar/LowbarPage'

const NavbarHtk2Page = () => {
    return (
        <div className='htk2-navbar-container'>
            <TopbarPage />
            <LowbarPage />
        </div>
    )
}

export default NavbarHtk2Page