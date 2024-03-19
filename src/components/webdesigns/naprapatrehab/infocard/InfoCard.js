import React from 'react'
import './infoCard.css'
import Button from './Button'

const InfoCard = ({ title, subtitle, desc }) => {
    return (
        <div className='infocard-container'>
            <h3 className='infocard-container_title'>{title}</h3>
            <p className='infocard-container_desciption'>{desc}</p>
            <div className='subtitle_button-container'>
                <h5 className='infocard-container_subtitle'>{subtitle}</h5>
                <Button />
            </div>
        </div>
    )
}

export default InfoCard