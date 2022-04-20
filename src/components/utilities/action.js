import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/helpers/_action.scss'

const Action = () => {
    return (
        <div className = 'action'>
            <div className = 'action__row1'> 
                <h3> HOW TO ENROLL </h3>
                <h1> Your Child in the Contest?</h1>
                <div className = 'action__dash'> </div>
            </div>
            <div className = 'action__row2'>
                <p> 
                    We really can't wait to have your Child onboard. Register and get the chance to meet
                    other awesome contestants. Click the button below to get started.
                </p>
                <Link to = '/pre-register'> <input type = 'button' value = 'Get Started' className = 'btn--primary' /> </Link>
            </div>
        </div>
    )
}

export default Action
