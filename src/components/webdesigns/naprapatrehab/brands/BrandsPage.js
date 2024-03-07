import React from 'react'
import './brands.css'
import logga1 from '../naprapatrehab_img/polfärskt.jpeg'
import logga2 from '../naprapatrehab_img/Logotype Crossfit södertörn.jpg'
import logga3 from '../naprapatrehab_img/logga olofsson bil.jpg'
import logga4 from '../naprapatrehab_img/logga länna sport.jpg'

const BrandsPage = () => {
    return (
        <div>
            <h3 className='brands_title'>
                Företag och föreningar vi sammarbetar med idag:
            </h3>
            <div className='brands_logos'>
                <img src={logga1} alt="polfarsk logga" />
                <img src={logga2} alt="polfarsk logga" />
                <img src={logga3} alt="polfarsk logga" />
                <img src={logga4} alt="polfarsk logga" />
            </div>
        </div>
    )
}

export default BrandsPage