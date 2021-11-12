import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/helpers/_banner.scss'
import image from './images/cutie.jpeg'

const Banner = (props) => {
    const {title} = props

    return (
        <div className = 'banner'>
            <div className = 'banner__img'>
                <img src = {image} alt = ''/>
            </div>
            <div className = 'banner__text'>
                <h1> {title} </h1>
                <div className = 'banner__text__link'>
                    <Link to = './' className = 'banner__text__link__link'> Home </Link>
                    <div className = 'banner__text__link__arrow'> </div>
                    <p> {title} </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;
