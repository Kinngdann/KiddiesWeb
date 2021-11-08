import React from 'react'
import wa from '../header/icons/wa.svg';
import '../styles/helpers/_whatsapp.scss';
import { Link } from "react-router-dom";

const Whatsapp = () => {
    return (
        <div className = 'wa'>
            <Link to = '/contestants'> <img src = {wa} width = '50' className = 'wa__icon' /> </Link>
        </div>
    )
}

export default Whatsapp
