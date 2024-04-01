import React from 'react'
import './footerNapra2.css'

const FooterNapra2 = () => {
    return (
        <div className='footer_napra2-container'>
            <div className='footer_napra2-container-contact'>
                <div>
                    <div className='icon_container'>
                        <i className="fa fa-phone-square fa-2x" aria-hidden="true" style={{ color: '#fff' }} />
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
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true" style={{ color: '#fff' }} />
                        <p className='icon_container-title'>Adress</p>
                        <p>Naprapat & Rehabcenter Haninge AB</p>
                        <p>Hantverkarvägen 23C</p>
                        <p>136 44 Handen</p>
                        <p>Sweden</p>
                    </div>

                    <div className='icon_container-social'>
                        <div className='icon_container-social_item'>
                            <i className="fa fa-facebook-square fa-2x" aria-hidden="true" style={{ color: '#fff' }} />
                            <i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: '#fff' }} />
                        </div>
                    </div>
                    <div className='icon_container'>
                        <p className='icon_container-title'>@naprapatrehab.com</p>
                    </div>


                </div>
                <div>
                    <div className='icon_container'>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#fff' }} />
                        <p className='icon_container-title'>E-post</p>
                        <p>info@naprapatrehab.com</p>
                        <p>susanne@naprapatrehab.com</p>
                        <p>sofie@naprapatrehab.com</p>
                        <p>line@naprapatrehab.com</p>
                    </div>

                </div>
            </div>
            <div className='footer_napra2-container-copyright'>
                <p>GDPR ersätter den svenska personuppgiftslagen (PuL). Information om hur vi samlar in och behandlar dina uppgifter hittar du i  vår Integritetspolicy.</p>
            </div>
        </div>
    )
}

export default FooterNapra2