import React from 'react'
import './homePage.css'
import logo from '../naprapatrehab_img/logga-2.png'

const HomePage = () => {
    return (
        <div id="napra" className='home-container'>
            <img className='home-container_img' src={logo} alt="logo" width={'100%'} />
            <div className='home-title_container'>
                <p className='home-title_continer_title'>Naprapatbehandling</p>
                <p className='home-title_continer_title'>Massage</p>
                <p className='home-title_continer_title'>MammaMageträning</p>
            </div>
        </div>
    )
}

export default HomePage