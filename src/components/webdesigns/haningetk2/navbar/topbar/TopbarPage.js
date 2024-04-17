import React from 'react'
import './topbarpage.css'

const TopbarPage = ({ setLink }) => {
    return (
        <div className='topbar_container'>
            <div onClick={() => setLink("Om klubben")} className='topbar_container-link'><span>Om klubben</span></div>
            <div onClick={() => setLink("Kontakt")} className='topbar_container-link'>Kontakt</div>
            <div onClick={() => setLink("Vision och Värdegrund")} className='topbar_container-link'>Vision och Värdegrund</div>
            <div className='topbar_container-link'>Hitta hit</div>
            <div id='navbar_container-empty' className='topbar_container-link'></div>
            <a href='https://www.stadium.se/foreningar/2436683' target='_blank' rel="noreferrer" id='navbar_container-link' className='topbar_container-link'>Shopen</a>
        </div>
    )
}

export default TopbarPage