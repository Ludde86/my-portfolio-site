import React from 'react'
import './brands.css'
import logga1 from '../naprapatrehab_img/polfärskt.jpeg'
import logga2 from '../naprapatrehab_img/Logotype Crossfit södertörn.jpg'
import logga3 from '../naprapatrehab_img/logga olofsson bil.jpg'
import logga4 from '../naprapatrehab_img/logga länna sport.jpg'

const BrandsPage = () => {
    return (
        <div className='brands_container'>
            <h3 className='brands_title'>
                Företag och föreningar vi sammarbetar med idag:
            </h3>
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