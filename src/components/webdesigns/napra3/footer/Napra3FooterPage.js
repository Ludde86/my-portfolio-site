import React from 'react'
import './napra3footerpage.css'

const Napra3FooterPage = () => {
    return (
        <div className='napra3-footer-container'>
            <div className='napra3-footer-container_info-container'>
                <div className='napra3-footer-container_info-container_contact-us-container'>

                    <i className="fa fa-phone-square fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                    <div className='napra3-footer-container_info-container_contact-us-container_contact-container'>
                        <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Telefon</p>
                        <p>08-599 00 459</p>
                    </div>

                    <div className='napra3-footer-container_info-container_contact-us-container_contact-container'>
                        <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Susanne</p>
                        <p>0704530288</p>
                    </div>
                    <div className='napra3-footer-container_info-container_contact-us-container_contact-container'>
                        <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Sofie</p>
                        <p>0702443473</p>
                    </div>
                    <div className='napra3-footer-container_info-container_contact-us-container_contact-container'>
                        <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Line</p>
                        <p>0704540923</p>
                    </div>
                </div>
                <div className='napra3-footer-container_info-container_contact-us-container'>

                    <i className="fa fa-map-marker fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Naprapat & Rehabcenter Haninge AB</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Hantverkarvägen 23C</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>136 44 Handen</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>Sweden</p>



                    <div >
                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                        <i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                    </div>

                    <div >
                        <p className='icon_container-title'>@naprapatrehab.com</p>
                    </div>


                </div>
                <div className='napra3-footer-container_info-container_contact-us-container'>

                    <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#333' }} />
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>info@naprapatrehab.com</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>susanne@naprapatrehab.com</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>sofie@naprapatrehab.com</p>
                    <p className='napra3-footer-container_info-container_contact-us-container_contact-container_title'>line@naprapatrehab.com</p>


                </div>
            </div>
            <div className='napra3-footer-container_copyright'>
                <p>GDPR ersätter den svenska personuppgiftslagen (PuL). Information om hur vi samlar in och behandlar dina uppgifter hittar du i  vår Integritetspolicy.</p>
                <p>&copy; Naprapat & Rehabcenter Haninge 2024</p>
            </div>
        </div>
    )
}

export default Napra3FooterPage