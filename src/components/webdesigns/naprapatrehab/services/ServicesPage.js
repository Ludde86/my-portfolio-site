import React from 'react'
import './servicesPage.css'
import InfoCard from '../infocard/InfoCard'

const ServicesPage = ({ info, title, subtitle, desc }) => {
    return (
        <div id="tjanster">
            <div id={info} className='services-container'>
                <InfoCard id={info} title={title} subtitle={subtitle} desc={desc} />
            </div>
        </div>
    )
}

export default ServicesPage