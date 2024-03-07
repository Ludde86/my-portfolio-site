import React from 'react'
import './homePage.css'
import InfoCard from '../infocard/InfoCard'

const HomePage = ({ id, title, subtitle, desc }) => {
    return (
        <div id={id} className='home-container'>
            <InfoCard id={id} title={title} subtitle={subtitle} desc={desc} />
        </div>
    )
}

export default HomePage