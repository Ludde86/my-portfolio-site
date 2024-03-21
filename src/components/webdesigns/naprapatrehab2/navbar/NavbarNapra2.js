import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbarnapra2.css'
import logo from '../assets/img/Naprapat.png'

const NavbarNapra2 = () => {
    return (
        <div className='navbar_napra2-container'>
            <div className='navbar_napra2-container_img-container'>
                <NavLink to="/projects">

                    <img className='navbar_napra2-container_img-container_img' src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className='navbar_napra2-container_links-container'>
                <NavLink className="navbar_napra2-container_links-container_link" to="/projects/home">
                    Hem
                </NavLink>

                <NavLink className="navbar_napra2-container_links-container_link" to="/projects/services">
                    Tjänster
                </NavLink>

                <NavLink className="navbar_napra2-container_links-container_link" to="/projects/brands">
                    Företag
                </NavLink>

                <NavLink className="navbar_napra2-container_links-container_link" to="/projects/about">
                    Om Oss
                </NavLink>

                <a className="navbar_napra2-container_links-container_link" href='https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747' target='_blank' rel="noreferrer">
                    BOKA TID
                </a>
            </div>


        </div>
    )
}

export default NavbarNapra2