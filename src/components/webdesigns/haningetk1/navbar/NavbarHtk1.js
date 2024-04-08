import React from 'react'
import './navbarhtk1.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const NavbarHtk1 = () => {
    return (
        <div className='htk-navbar-container'>


            <div className='htk-navbar-container_links-container_link-container'>
                <a className='htk-navbar-container_links-container_icon' to="/projects/home">
                    <i className="fa fa-home" aria-hidden="true" style={{ color: '#fff' }} />
                </a>
                <div className='htk-navbar-container_links-container_link_underline'></div>
            </div>

            <div className='htk-navbar-container_links-container'>
                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Om klubben
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Kontakt
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Medlemsskap
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Vision & värdegrund
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Hitta hit
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href='https://www.stadium.se/foreningar/2436683' target='_blank' rel="noreferrer">
                        Shopen
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>
            </div>
        </div>
    )
}

export default NavbarHtk1