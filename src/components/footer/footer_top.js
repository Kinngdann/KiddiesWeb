import React from 'react'
import {Link} from 'react-router-dom'
import logo from './Kiddieslogo.png'

const FooterTop = () => {
    return (
        <div className = 'footer'>
            <div className = 'footer-top'>
                <div className = 'container'>

                    <div className = 'first-element'>
                        <img src = {logo} width = '200' alt = 'logo' className = 'image'/>
                    </div>

                    <div className = 'second-element'>
                        <h3> A Little About US </h3>
                        <p> This should be an about Kiddies
                        Crown, which deduce it should be
                        a brief, concise, prescint 
                        and absolute. 
                        </p>
                    </div>

                    <div className = 'third-element'>
                        <h3> Quick Links</h3>
                        <ul>
                            <li> <Link to = './'> Contestants </Link></li>
                            <li> <Link to = './'> Elite Board </Link></li>
                            <li> <Link to = './'> Terms & Condition </Link></li>
                            <li> <Link to = './'> Contact us </Link></li>
                        </ul>
                    </div>

                    <div className = 'fourth-element'>
                        <h3> A Little About US </h3>
                        <p> This should be an about Kiddies
                        Crown, which deduce it should be
                        a brief, concise, prescint 
                        and absolute. 
                        </p>
                    </div>
                </div>
            </div>
            <div className = 'footer-bottom'> 
                <p> Copyright © 2021 Kiddies Crown All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default FooterTop
