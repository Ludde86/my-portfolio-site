import React from 'react'
import './infoCard.css'
import Button from './Button'

const InfoCard = () => {
    return (
        <div className='infocard-container'>
            <h3 className='infocard-container_title'>Naprapatbehandling nybesök/återbesök 750:-</h3>
            <p className='infocard-container_desciption'>Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder</p>
            <h5 className='infocard-container_subtitle'>Tid: 30-40 min</h5>
            <Button />
        </div>
    )
}

export default InfoCard