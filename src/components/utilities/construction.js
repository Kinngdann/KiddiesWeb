import React from 'react'
import construction from './images/construction.jpg'
import '../styles/helpers/_construction.scss'

const Construction = () => {
    return (
        <div className = 'construction'>  
            <div> 
                 <h1> Oops! </h1>
                 <h3> Under Construction </h3>
                 <input type = 'button' value = 'Go Home' className = 'btn--primary' />
            </div>
            <div>
                <img src = {construction} alt = 'construction image' width = '700' />
            </div>
        </div>
    )
}

export default Construction
