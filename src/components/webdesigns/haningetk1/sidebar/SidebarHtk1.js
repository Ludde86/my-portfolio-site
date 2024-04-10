import React from 'react'
import './sidebarhtk1.css'

const SidebarHtk1 = ({ openSidebar, onSetOpenSidebar }) => {
    return (
        <div className='htk1-sidebar-container' style={{
            width: openSidebar && '75%'
        }} onClick={() => onSetOpenSidebar()} >



            <div className='htk-navbar-container_links-container_link-container'>
                <span id='htk1-sidebar-button' className='htk-navbar-container_links-container_icon' onClick={() => onSetOpenSidebar()}>
                    <i className={openSidebar ? "fa fa-times" : "fa fa-align-left"} aria-hidden="true" style={{ color: '#fff' }} />
                </span>
            </div>
            <div className='htk-sidebar-container_links-container' style={{
                marginLeft: openSidebar ? 0 : '-100vw'
            }}>
                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="#home">
                        Hem
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="#about">
                        Om klubben
                    </a>
                    <div className='htk-navbar-container_links-container_link_underline'></div>
                </div>

                <div className='htk-navbar-container_links-container_link-container'>
                    <a className='htk-navbar-container_links-container_link' href="#vision">
                        Vision & värdegrund
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

export default SidebarHtk1