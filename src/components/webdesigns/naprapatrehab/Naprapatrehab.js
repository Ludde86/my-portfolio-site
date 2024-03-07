import React from 'react'
import './naprapatrehab.css'
import Navbar from './navbar/Navbar'
import HomePage from './home/HomePage'
import BrandsPage from './brands/BrandsPage'

const Naprapatrehab = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <HomePage id="home-1" title="Naprapatbehandling - Nybesök/återbesök 750:-" subtitle="Tid: 30-40 min" desc="Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder." />
            <HomePage id="home-2" title="Naprapatbehandling - Pensionär/student 700:-" subtitle="Tid: 30-40 min" desc="Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder." />
            <HomePage id="home-3" title="Massage 730:-" subtitle="Tid: 30 min" desc="Denna tjänst är till för dig som inte söker för några specifika besvär utan önskar enklare mjukdelsbehandling i form av massage, triggerpunktsbehandling och stretch. Vi lägger lite extra fokus på de områden i kroppen där du har mer muskulära spänningar." />
            <BrandsPage />
        </div>
    )
}

export default Naprapatrehab