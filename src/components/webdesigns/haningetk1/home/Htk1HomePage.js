import React from 'react'
import './htk1homepage.css'
import { useState } from 'react'

const Htk1HomePage = ({ openSidebar }) => {

    const [openHomepage, setOpenHomePage] = useState(true)

    return (
        <>
            {openHomepage &&
                <div className='htk1-home-container' style={{ opacity: openSidebar && 0 }}>

                    <span id='htk1-home-button' className='htk1-home-container_icon' onClick={() => setOpenHomePage(!openHomepage)}>
                        <i className="fa fa-times" aria-hidden="true" style={{ color: '#333' }} />
                    </span>
                    <h3>Officiella HTK klubbkläder via Stadium</h3>
                    <p>Via vår samarbetspartner Stadium kan klubben nu erbjuda klubbkläder med tryck till våra medlemmar till förmånliga priser. Gå in och köp dina nya klubbkläder redan nu på länken eller klicka dig vidare Stadiums via reklamikonen på hemsidan.</p>
                    <a href='https://www.stadium.se/foreningar/2436683' target='_blank' rel="noreferrer">Klubbkläder HTK</a>

                </div>
            }

        </>
    )
}

export default Htk1HomePage