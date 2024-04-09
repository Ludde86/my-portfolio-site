import React from 'react'
import './htk1footerpage.css'

const Htk1FooterPage = () => {
    return (
        <div className='htk1-footer-container'>

            <div className='htk1-footer-container_info-container'>
                <div className='htk1-footer-container_club-info'>
                    <p className='htk1-footer-container_club-info_title'>Klubbinfo</p>
                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Bildad</p>
                        <p className='htk1-footer-container_club-info_desc'>1968-01-01</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Adress</p>
                        <p className='htk1-footer-container_club-info_desc'>Box 39 Haninge, Torvallavägen 14</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Postadress</p>
                        <p className='htk1-footer-container_club-info_desc'>13644 Handen</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Öppettider</p>
                        <p className='htk1-footer-container_club-info_desc'>06.30-23.30</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Kontorsdagar</p>
                        <p className='htk1-footer-container_club-info_desc'>Måndag-Fredag</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>E-post</p>
                        <p className='htk1-footer-container_club-info_desc'>kansliet@haningetk.se</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Hemsida</p>
                        <p className='htk1-footer-container_club-info_desc'>https://www.haningetk.se</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>PlusGiro</p>
                        <p className='htk1-footer-container_club-info_desc'>567740-6</p>
                    </div>

                    <div className='htk1-footer-container_club-info_subtitle-desc-container'>
                        <p className='htk1-footer-container_club-info_subtitle'>Organisationsnummer</p>
                        <p className='htk1-footer-container_club-info_desc'>802405-4069</p>
                    </div>
                </div>
                <div className='htk1-footer-container_member-info'>
                    <p className='htk1-footer-container_club-info_title'>Medlemsavgifter</p>
                    <p className='htk1-footer-container_club-info_subtitle'>Från och med 2012 gäller följande medlemsavgifter</p>
                    <p className='htk1-footer-container_club-info_desc'>Junior = 210 kr/år</p>
                    <p className='htk1-footer-container_club-info_desc'>Senior = 420 kr/år</p>
                    <p className='htk1-footer-container_club-info_desc'>Familj = 630 kr/år</p>
                </div>
            </div>
            <p className='htk1-footer-container_copyright'>&copy; Haninge Tennisklubb 2024</p>
        </div>
    )
}

export default Htk1FooterPage