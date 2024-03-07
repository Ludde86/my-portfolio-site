import React from 'react'
import './naprapatrehab.css'
import Navbar from './navbar/Navbar'
import HomePage from './home/HomePage'

const Naprapatrehab = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <HomePage id="home-1" />
            <HomePage id="home-2" />
            <HomePage id="home-3" />
            <HomePage id="home-4" />
        </div>
    )
}

export default Naprapatrehab