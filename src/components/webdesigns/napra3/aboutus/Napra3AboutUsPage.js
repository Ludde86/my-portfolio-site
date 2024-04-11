import React from 'react'
import './napra3aboutuspage.css'

const Napra3AboutUsPage = () => {
    return (
        <div className='napra3-aboutus-container'>

            <div className='napra3-aboutus-container_img-container'>
                <div className='napra3-aboutus-container_img-container_card_border'>
                    <div id='napra3-aboutus-container_img-container_card-1' className='napra3-aboutus-container_img-container_card'>
                        <p>Susanne Nyström Leg. Naprapat</p>
                    </div>
                </div>

                <div className='napra3-aboutus-container_img-container_card_border'>
                    <div id='napra3-aboutus-container_img-container_card-2' className='napra3-aboutus-container_img-container_card'>
                        <p>Line Jonasson Leg. Naprapat</p></div>
                </div>

                <div className='napra3-aboutus-container_img-container_card_border'>
                    <div id='napra3-aboutus-container_img-container_card-3' className='napra3-aboutus-container_img-container_card'>
                        <p>Sofie Schmidt Leg. Naprapat</p></div>
                </div>
            </div>

            <div className='napra3-aboutus-container_desc-container'>
                <h1>Några ord om oss...</h1>
                <p>Från början var vi enskilda företag som arbetade på varsitt håll, men i samma lokaler. Vänskapen och samarbetet växte fram och vi bestämde oss under hösten 2015 för att gå ihop och bilda det som idag är Naprapat & Rehabcenter Haninge.</p>
                <p>Vägen hit har varit mycket spännande, rolig och givande men som med allt här i livet inte helt utan gropar i vägen. Vi ser ljust på framtiden tillsammans och hoppas att få  spendera många timmar tillsammans framöver, där vi på bästa sätt vill finnas till  för er som på något sätt kan tänkas behöva vår hjälp.</p>
                <p>Vår målsättning och vision med Naprapat & Rehabcenter Haninge är att växa och  i framtiden knyta till oss  andra yrkessamma terapeuter och pedagoger som liksom vi jobbar med hälsa och rehabilitering.</p>
            </div>

            <div className='napra3-aboutus-container_footer-container'>
                <div className='footer_napra2-container-contact'>
                    <div>
                        <div className='icon_container'>
                            <i className="fa fa-phone-square fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                            <p className='icon_container-title'>Telefon</p>
                            <p>08-599 00 459</p>
                        </div>
                        <div className='contact_container'>
                            <p className='icon_container-title'>Susanne</p>
                            <p>0704530288</p>
                        </div>
                        <div className='contact_container'>
                            <p className='icon_container-title'>Sofie</p>
                            <p>0702443473</p>
                        </div>
                        <div className='contact_container'>
                            <p className='icon_container-title'>Line</p>
                            <p>0704540923</p>
                        </div>
                    </div>
                    <div>
                        <div className='icon_container'>
                            <i className="fa fa-map-marker fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                            <p className='icon_container-title'>Adress</p>
                            <p>Naprapat & Rehabcenter Haninge AB</p>
                            <p>Hantverkarvägen 23C</p>
                            <p>136 44 Handen</p>
                            <p>Sweden</p>
                        </div>

                        <div className='icon_container-social'>
                            <div className='icon_container-social_item'>
                                <i className="fa fa-facebook-square fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                                <i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                            </div>
                        </div>
                        <div className='icon_container'>
                            <p className='icon_container-title'>@naprapatrehab.com</p>
                        </div>


                    </div>
                    <div>
                        <div className='icon_container'>
                            <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                            <p className='icon_container-title'>E-post</p>
                            <p>info@naprapatrehab.com</p>
                            <p>susanne@naprapatrehab.com</p>
                            <p>sofie@naprapatrehab.com</p>
                            <p>line@naprapatrehab.com</p>
                        </div>

                    </div>
                </div>
                <div className='napra3-aboutus-container_footer-container_copyright'>
                    <p>GDPR ersätter den svenska personuppgiftslagen (PuL). Information om hur vi samlar in och behandlar dina uppgifter hittar du i  vår Integritetspolicy.</p>
                    <p>&copy; Naprapat & Rehabcenter Haninge 2024</p>
                </div>
            </div>

        </div>
    )
}

export default Napra3AboutUsPage