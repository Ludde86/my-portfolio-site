import React from 'react'
import './naprapatrehab.css'
import Navbar from './navbar/Navbar'
import ServicesPage from './services/ServicesPage'
import BrandsPage from './brands/BrandsPage'
import AboutPage from './about/AboutPage'
import FooterPage from './footer/FooterPage'
import HomePage from './home/HomePage'
import HomeButton from './navbar/HomeButton'

const Naprapatrehab = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <HomeButton />
            <HomePage />
            <ServicesPage info="services-1" title="Naprapatbehandling - Nybesök/återbesök 750:-" subtitle="Tid: 30-40 min" desc="Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder." />
            <ServicesPage info="services-2" title="Naprapatbehandling - Pensionär/student 700:-" subtitle="Tid: 30-40 min" desc="Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder." />
            <ServicesPage info="services-3" title="Massage 730:-" subtitle="Tid: 30 min" desc="Denna tjänst är till för dig som inte söker för några specifika besvär utan önskar enklare mjukdelsbehandling i form av massage, triggerpunktsbehandling och stretch. Vi lägger lite extra fokus på de områden i kroppen där du har mer muskulära spänningar." />

            {/*
            <HomePage id="services-4" title="MammaMageträning - Nybesök 600:-" subtitle="Tid: 50 min" desc="Som certifierad MammaMagetränare kan jag ge dig konsultationer kring magen, diasatser och dynfunktioner för att sedan tillsammans med dig hitta ett mer optimalt muskelengagemang." />
            <HomePage id="services-5" title="MammaMageträning - Återbesök 550:-" subtitle="Tid: 40 min" desc="Som certifierad MammaMagetränare kan jag ge dig konsultationer kring magen, diasatser och dynfunktioner för att sedan tillsammans med dig hitta ett mer optimalt muskelengagemang." />
            */}

            <AboutPage />
            <BrandsPage />
            <FooterPage />
        </div>
    )
}

export default Naprapatrehab