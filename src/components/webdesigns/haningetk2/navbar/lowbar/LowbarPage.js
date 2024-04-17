import React from 'react'
import './lowbarpage.css'
import { useState } from 'react'

const LowbarPage = () => {

    const [activeTennisskola, setActiveTennisskola] = useState(false)
    const [activeTävling, setActiveTävling] = useState(false)
    const [activeKontrakt, setActiveKontrakt] = useState(false)

    return (
        <div className='lowbar_container'>



            <div className='lowbar_container-link_container'>
                {/*
            <i hidden={activeTennisskola} class="fa fa-chevron-up" aria-hidden="true"></i>
            */}
                <div onMouseEnter={() => setActiveTennisskola(true)}
                    onMouseLeave={() => setActiveTennisskola(false)} className={'lowbar_container-link ' + (activeTennisskola && 'lowbar_container-link-active')}>
                    <div>
                        <span className='lowbar_container-link_container-link_title'>
                            Tennisskolan
                        </span>
                    </div>
                    {activeTennisskola &&
                        <>
                            <span className='lowbar_container-link_container-link_subtitle'>T-skolan</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Prislista</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Tränarna</span>
                        </>
                    }
                </div>
            </div>

            <div className='lowbar_container-link_container'>
                {/*
                <i hidden={activeTävling} class="fa fa-chevron-up" aria-hidden="true"></i>
            */}
                <div onMouseEnter={() => setActiveTävling(true)}
                    onMouseLeave={() => setActiveTävling(false)} className={'lowbar_container-link ' + (activeTävling && 'lowbar_container-link-active')}>
                    <div>
                        <span className='lowbar_container-link_container-link_title'>
                            Tävling
                        </span>
                    </div>
                    {activeTävling &&
                        <>
                            <span className='lowbar_container-link_container-link_subtitle'>Klubbmästerskap</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Skinkdubbeln</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Lovcuper</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Börja tävla!</span>
                        </>
                    }
                </div>
            </div>

            <div className='lowbar_container-link_container'>
                {/*
                <i hidden={activeKontrakt} class="fa fa-chevron-up" aria-hidden="true"></i>
            */}
                <div onMouseEnter={() => setActiveKontrakt(true)}
                    onMouseLeave={() => setActiveKontrakt(false)} className={'lowbar_container-link ' + (activeKontrakt && 'lowbar_container-link-active')}>
                    <div>
                        <span className='lowbar_container-link_container-link_title'>
                            Kontrakt- och strötider
                        </span>
                    </div>
                    {activeKontrakt &&
                        <>
                            <span className='lowbar_container-link_container-link_subtitle'>Priser</span>
                            <span className='lowbar_container-link_container-link_subtitle'>Om kontrakt/strötider</span>
                        </>
                    }
                </div>
            </div>

            <div className='lowbar_container-link_container'>
                <div className='lowbar_container-link'>
                    <span className='lowbar_container-link_container-link_title'>Gruppspel</span>

                </div>
            </div>

            <div id='navbar_container-link' className='lowbar_container-link'>Bli medlem</div>
            <div id='navbar_container-link' className='lowbar_container-link'>Boka bana</div>
        </div>
    )
}

export default LowbarPage