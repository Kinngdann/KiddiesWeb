import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/home/_hero.scss'
// import hero from './pictures/hero.png'

const Hero = () => {
    return (
        <div className = 'hero' >
            <div className = 'hero__col1'>
                <div  className = 'hero__col1__text'>
                    <h3> How <span>Cute</span> is Your Child..? </h3>
                    <h1> Well, let's <span>prove</span> it to the world. </h1>
                </div>

                <div className = 'hero__col1__btn'> 
                    <Link to = '/about'><input type = 'button' value = 'Learn More' className = 'learn btn--secondary' /></Link>
                    <Link to = '/register'> <input type = 'button' value = 'Register' className = 'register btn--primary' /> </Link>
                </div>
            </div>
            <div className = 'hero__col2'>
            </div>
        </div>
    )
}

export default Hero;


