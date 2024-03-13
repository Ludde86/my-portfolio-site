import React from 'react'
import './brands.css'
import logga1 from '../naprapatrehab_img/polfärskt.jpeg'
import logga2 from '../naprapatrehab_img/Logotype Crossfit södertörn.jpg'
import logga3 from '../naprapatrehab_img/logga olofsson bil.jpg'
import logga4 from '../naprapatrehab_img/logga länna sport.jpg'
import logo from '../naprapatrehab_img/logga-1.png'

const BrandsPage = () => {
    return (
        <div className='brands_container'>
            {/*
        <h1 className='brands_title'>
        Våra samarbetspartner:
        </h1>
        <div className='line-break'></div>
        */}
            <div className='brands_container-logo'>
                <img src={logo} alt="logo" width={'50%'} />
            </div>
            <div className='brands_logos'>
                <div className='brands_logos-logo-container'>
                    <img src={logga1} alt="polfarsk logga" />
                </div>
                <div className='brands_logos-logo-container'>
                    <img src={logga2} alt="polfarsk logga" />
                </div>
                <div className='brands_logos-logo-container'>
                    <img src={logga3} alt="polfarsk logga" />
                </div>
                <div className='brands_logos-logo-container'>
                    <img src={logga4} alt="polfarsk logga" />
                </div>
            </div>
        </div>
    )
}

export default BrandsPage