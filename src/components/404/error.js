import React from 'react'
import error from './picture/404.svg'
import {Link} from 'react-router-dom'
import '../styles/components/404/_error.scss'

const Error = () => {
    return (
        <div className = 'error'>
            <div className = 'error__img'>
                <img src = {error} width = '300' alt = '404 error' />
            </div>
            <div className = 'error__text'>
                <h1> Page Not Found </h1>
                <p> We're sorry, the page you requested could not be found.</p>
                <Link to = './'> <input type = 'button' value = 'Home' className = 'btn--primary'/> </Link>
            </div>
        </div>
    )
}

export default Error
