import React from 'react'
import error from './images/error.jpg'
import '../styles/helpers/_coming_soon.scss';


const ComingSoon = () => {
    return (
        <div className = 'coming-soon'>
            <div className = 'container'>
                <img src = {error} alt = '' width = '500' />
                <h3> Coming Soon </h3>
                <input type = 'button' value = 'Home'  className = 'btn--primary' />
            </div>
        </div>
    )
}

export default ComingSoon;
