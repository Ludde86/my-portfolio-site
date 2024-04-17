import React from 'react'
import './topbarpage.css'

const TopbarPage = () => {
    return (
        <div className='topbar_container'>
            <div className='topbar_container-link'><span>Om klubben</span></div>
            <div className='topbar_container-link'>Kontakt</div>
            <div className='topbar_container-link'>Vision och Värdegrund</div>
            <div className='topbar_container-link'>Hitta hit</div>
            <div id='navbar_container-empty' className='topbar_container-link'></div>
            <div id='navbar_container-link' className='topbar_container-link'>Shopen</div>
        </div>
    )
}

export default TopbarPage