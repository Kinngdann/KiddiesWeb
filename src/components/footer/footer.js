import React from 'react'
import '../styles/components/footer/_footer.scss'
import Email from '../utilities/email'
import {Link} from 'react-router-dom'
import logo from '../header/icons/logo.svg'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className = 'footer__row1'>
                <div className = 'footer__row1__col1'>
                    <img src = {logo} width = '200' alt = 'logo' className = 'image'/>
                    <p> 
                        We love Kids! We are unapologetically passionate about children. With this 
                        platform, we're keen to bringing out the great qualities
                        of every Child.
                    </p>
                </div>

                <div className = 'footer__row1__col2'>
                    <h3> Motherhood </h3>
                    <p className = 'quote'> 
                        "Motherhood is the exquisite inconvience of being another person's everything."
                        <br/> - Unknown
                    </p>
                    
                </div>

                <div className = 'footer__row1__col3'>
                    <div className = 'container'>
                        <h3> Quick Links</h3>
                        <ul>
                            <li> <Link to = '/contestants'> Contestants </Link></li>
                            <li> <Link to = '/elites'> Elite Board </Link></li>
                            <li> <Link to = '/terms'> T&C </Link></li>
                            <li> <Link to = '/contact'> Contact us </Link></li>
                        </ul>
                    </div>
                </div>

                <div className = 'footer__row1__col4'>
                    <h3> Write to us </h3>
                    <Email />
                </div>

            </div>
            <div className = 'footer__row2'> 
                <p> Copyright © 2021 Kiddies Crown All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer
