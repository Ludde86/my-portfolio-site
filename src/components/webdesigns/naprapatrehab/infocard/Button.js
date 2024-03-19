import React from 'react'
import './button.css'

const Button = () => {
    return (
        <input className='button-orange' type="button" value="Boka tid" onClick={() => window.open('https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747')} />
    )
}

export default Button