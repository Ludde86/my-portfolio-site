import React from 'react'
import './navbar.css'
import logo from '../naprapatrehab_img/logga-1.png'

const Navbar = () => {

    const links = [
        'Hem',
        'Om oss',
        'Tjänster',
        'Aktuellt',
        'Företag',
        'Hitta hit',
        'BOKA TID',
    ]

    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo' width={100} />
            </div>
            <ul className='ul_container'>

                <a className='link-item' href='#om-oss'>Om oss</a>
                <a className='link-item' href='#tjanster'>Tjänster</a>
                <a className='link-item' href='#aktuellt'>Aktuellt</a>
                <a className='link-item' href='#foretag'>Företag</a>
                <a className='link-item' href='#hitta-hit'>Hitta hit</a>
                <a className='link-item' href='#boka-tid'>BOKA TID</a>

            </ul>
        </div>
    )
}

export default Navbar
