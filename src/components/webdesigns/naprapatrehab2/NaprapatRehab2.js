import React from 'react'
import './naprapatRehab2.css'
import NavbarNapra2 from './navbar/NavbarNapra2'
import Main from './navbar/Main'
import FooterNapra2 from './footer/FooterNapra2'

const NaprapatRehab2 = () => {
    return (
        <div className='napra_2-container'>
            <NavbarNapra2 />


            <div>
                <Main />
                <FooterNapra2 />
            </div>
        </div>
    )
}

export default NaprapatRehab2