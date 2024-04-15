import React from 'react'
import './navbarNapra3.css'
import logo from '../assets/img/Naprapat.png'

const NavbarNapra3 = () => {

    const links = [
        'Hem', 'Om oss', 'Tjänster', 'BOKA TID'
    ]

    return (
        <div className='navbarNapra3-container'>
            <div className='napra3-logo-container'>
                <img src={logo} alt='logo' />
            </div>
            <div className='napra3-links-container'>

                <a href="#Hem">Hem</a>
                <a href="#Om oss">Om oss</a>
                <a href="#Tjänster">Tjänster</a>
                <a href="#BOKA TID">BOKA TID</a>

            </div>
        </div>
    )
}

export default NavbarNapra3