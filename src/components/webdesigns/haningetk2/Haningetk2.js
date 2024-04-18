import React, { createContext, useState } from 'react'
import './haningetk2.css'
import TopbarPage from './navbar/topbar/TopbarPage'
import LowbarPage from './navbar/lowbar/LowbarPage'
import EventHtk2Page from './event/EventHtk2Page'
import HomeHtk2Page from './landing/home/HomeHtk2Page'
import TennisskolanHtk2Page from './landing/tennisskolan/TennisskolanHtk2Page'
import ContactHtk2Page from './landing/contact/ContactHtk2Page'
import VisionsHtk2Page from './landing/visions/VisionsHtk2Page'

export const Htk2Context = createContext();

const Haningetk2 = () => {

    const [link, setLink] = useState("Om klubben")

    console.log('link @Start: ', link);

    return (
        <div className='htk2_container'>
            <Htk2Context.Provider value={{ link, setLink }}>
                <TopbarPage />
                <div className='htk2_container-landing_container'>
                    <div className='htk2_landing_container'>
                        {link === 'Om klubben' && <HomeHtk2Page />}
                        {link === "T-skolan" && <TennisskolanHtk2Page />}
                        {link === "Prislista" && <TennisskolanHtk2Page />}
                        {link === "Tränarna" && <TennisskolanHtk2Page />}
                        {link === "Kontakt" && <ContactHtk2Page />}
                        {link === "Vision och Värdegrund" && <VisionsHtk2Page />}
                    </div>

                    <EventHtk2Page />
                </div>
                <LowbarPage />
            </Htk2Context.Provider>
        </div>
    )
}

export default Haningetk2