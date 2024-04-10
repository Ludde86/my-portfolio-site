import React from 'react'
import './navbarhtk1.css'

const NavbarHtk1 = ({ openSidebar }) => {

    return (
        <div className='htk-navbar-container' style={{ opacity: openSidebar && 0.1 }}>



            {/*
        <div className='htk-navbar-container_links-container_link-container'>
        <a className='htk-navbar-container_links-container_icon' to="/projects/home">
        <i className="fa fa-home" aria-hidden="true" style={{ color: '#fff' }} />
        </a>
        <div className='htk-navbar-container_links-container_link_underline'></div>
        </div>
    */}

            <div className='htk-navbar-container_links-container'>
                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Tennisskolan
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Tävling
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Gruppspel
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="/projects/">
                        Kontrakt- och strötider
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a id='htk-navbar-container_links-container_link-container_button' className='htk-navbar-container_links-container_link' href="/projects/">
                        Bli medlem
                    </a>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a id='htk-navbar-container_links-container_link-container_button' className='htk-navbar-container_links-container_link' href='https://www.matchi.se/facilities/haningetk' target='_blank' rel="noreferrer">
                        Boka bana
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavbarHtk1