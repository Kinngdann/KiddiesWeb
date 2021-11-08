import React from 'react'
import '../styles/components/home/_hero.scss'
import pic from './pictures/family.jpeg'

const Hero = () => {
    return (
        <div className = 'hero' >
            <div className = 'hero__col1'>
                <div className = 'hero__col1__text'>
                    <h3> How <span> Cute </span> is Your Child..? </h3>
                    <h1> Well, let's help prove that to the world. </h1>
                </div>

                <div className = 'hero__col1__btn'> 
                    <input type = 'button' value = 'Learn More' className = 'learn btn--secondary' />
                    <input type = 'button' value = 'Register' className = 'register btn--primary' />
                </div>
            </div>
            <div className = 'hero__col2'> 
            </div>
        </div>
    )
}

export default Hero;
// <img src = {pic} alt = 'family' className = 'hero__col2__img' /> 

