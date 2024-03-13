import React from 'react'
import './navbar.css'
import logo from '../naprapatrehab_img/logga-1.png'
import Button from '../infocard/Button'

const Navbar = () => {

    const links = [
        'Hem',
        'Om oss',
        'Tjänster',
        'Aktuellt',
        'Företag',
        'Hitta hit',
    ]

    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo' width={100} />
            </div>
            <ul className='ul_container'>
                {links.map((link, index) =>
                    <li key={index} className='link-item'>{link}</li>
                )}
                <Button />
            </ul>
        </div>
    )
}

export default Navbar
