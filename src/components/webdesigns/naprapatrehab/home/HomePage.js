import React from 'react'
import './homePage.css'
import InfoCard from '../infocard/InfoCard'

const HomePage = ({ id }) => {
    return (
        <div id={id} className='home-container'>
            <InfoCard />
        </div>
    )
}

export default HomePage