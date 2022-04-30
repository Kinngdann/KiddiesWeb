import React from 'react'
import whatsapp from './images/whatsapp.svg';
import '../styles/helpers/_whatsapp.scss';

const Whatsapp = () => {
    return (
        <div className = 'wa'>
            <a href = 'https://wa.me/message/WPNWKSRUU2FCG1'><img src = {whatsapp} width = '50' className = 'wa__icon' alt = 'whatsapp icon' /></a>
        </div>
    )
}

export default Whatsapp
