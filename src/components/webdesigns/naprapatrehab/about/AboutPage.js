import React from 'react'
import './about.css'
import about1 from '../naprapatrehab_img/Susanne Porträtt 1.jpeg'
import about2 from '../naprapatrehab_img/Line Porträtt 1.jpeg'
import about3 from '../naprapatrehab_img/Sofie Porträtt 2.jpeg'

const AboutPage = () => {
    return (
        <div className='about_container'>
            <h3 className='about_container-title'>Några ord om oss:</h3>

            <div className='about_container-images'>
                <div id='about1' className='about_container-images_card'>
                    <div className='about_container-images_card-text'>
                        <p>Susanne Nyström</p>
                        <p>Leg. Naprapat</p>
                    </div>
                </div>
                <div id='about2' className='about_container-images_card'>
                    <div className='about_container-images_card-text'>
                        <p>Line Jonasson</p>
                        <p>Leg. Naprapat</p>
                    </div>
                </div>
                <div id='about3' className='about_container-images_card'>
                    <div className='about_container-images_card-text'>
                        <p>Sofie Schmidt</p>
                        <p>Leg. Naprapat</p>
                    </div>
                </div>
            </div>

            <div className='about_container-description'>
                <div className='about_container-description_text'>
                    <p id='about_container-description_text-title'>Från början...</p>
                    <p>var vi enskilda företag som arbetade på varsitt håll, men i samma lokaler. Vänskapen och samarbetet växte fram och vi bestämde oss under hösten 2015 för att gå ihop och bilda det som idag är Naprapat & Rehabcenter Haninge.</p>
                    <p id='about_container-description_text-title'>Vägen hit...</p>
                    <p>har varit mycket spännande, rolig och givande men som med allt här i livet inte helt utan gropar i vägen. Vi ser ljust på framtiden tillsammans och hoppas att få  spendera många timmar tillsammans framöver, där vi på bästa sätt vill finnas till  för er som på något sätt kan tänkas behöva vår hjälp.</p>
                    <p id='about_container-description_text-title'>Under sommaren 2017...</p>
                    <p>flyttade vi vår verksamhet från Hantverkarvägen 22, ca 200 meter rakt över gatan till Hantverkarvägen 23 C. En flytt som innebar nya fräscha lokaler och  behandlingsrum samt ett rehab-/träningsrum.</p>
                </div>
                <div className='about_container-description_text'>
                    <p id='about_container-description_text-title'>Vår målsättning...</p>
                    <p>och vision med Naprapat & Rehabcenter Haninge är att växa och  i framtiden knyta till oss  andra yrkessamma terapeuter och pedagoger som liksom vi jobbar med hälsa och rehabilitering.
                    </p>
                    <p id='about_container-description_text-title'>I början...</p>
                    <p>av 2021 så flyttade Emelie´s kroppsvård in i vårat rehabrum där hon som utbildad kinesiolog, massör och zonterapeut utför behandlingar. Vi är glada för detta och ser fram emot gott samarbete och en kollega som brinner för att hjälpa människor till en friskare och starkare kropp. </p>
                    <p id='about_container-description_text-title'>Under hösten 2021...</p>
                    <p>i samband med att Line gick hem på föräldraledighet så utökade vi vår bemmaning med ytterligare en leg. naprapat, nämligen vår kära kollega Charlotte Jacobsson. Detta är vi så glada och tacksamma för då Charlotte besitter många års erfarenhet inom branschen.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage