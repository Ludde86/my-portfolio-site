import React, { useContext } from 'react'
import './topbarpage.css'
import { Htk2Context } from '../../Haningetk2';

const TopbarPage = () => {

    const htk2 = useContext(Htk2Context);

    return (
        <div className='topbar_container'>
            <div onClick={() => htk2.setLink("Om klubben")} className='topbar_container-link'><span>Om klubben</span></div>
            <div onClick={() => htk2.setLink("Kontakt")} className='topbar_container-link'>Kontakt</div>
            <div onClick={() => htk2.setLink("Vision och Värdegrund")} className='topbar_container-link'>Vision och Värdegrund</div>
            <div className='topbar_container-link'>Hitta hit</div>
            <div id='navbar_container-empty' className='topbar_container-link'></div>
            <a href='https://www.stadium.se/foreningar/2436683' target='_blank' rel="noreferrer" id='navbar_container-link' className='topbar_container-link'>Shopen</a>
        </div>
    )
}

export default TopbarPage