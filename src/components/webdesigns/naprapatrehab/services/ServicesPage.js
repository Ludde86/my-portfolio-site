import React from 'react'
import './servicesPage.css'
import InfoCard from '../infocard/InfoCard'

const ServicesPage = ({ id, title, subtitle, desc }) => {
    return (
        <div id={id} className='services-container'>
            <InfoCard id={id} title={title} subtitle={subtitle} desc={desc} />
        </div>
    )
}

export default ServicesPage