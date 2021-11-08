import React from 'react'
import '../styles/components/about/_brief.scss'
import child from './pictures/child.jpeg'
import checkmark from './pictures/checkmark.svg'

const Brief = () => {
    return (
        <div className = 'brief'>
            <div className = 'brief__row1'>
                <h4> welcome to </h4>
                <h2> Kiddies Crown </h2>
            </div>

            <div className = 'brief__row2'>
                <div className = 'brief__row2__img'>
                    <img src = {child} alt = 'family' className = 'brief__row2__img__img'/>
                </div>

                <div className = 'brief__row2__text'>
                    <p> 
                        Do you think your child is the most beautiful and cutest thing in the world? Yeah, I know right? Being the parent of the cutest child is the most delightful feeling in the world. And that is why we have organized a “Kiddies Crown Contest” for proud parents all around Nigeria to showcase the beauty, influence, and other great qualities of their child.                     
                    </p>

                    <h2> Our Primary Concern </h2>
                    <ul>
                        <li> 
                            <div className = 'brief__row2__item'>
                                <img src = {checkmark} alt = 'checkmark' width = '20' />
                                <p> Bringing out the star in your child </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__row2__item'>
                                <img src = {checkmark} alt = 'checkmark' width = '20' />
                                <p> Supporting your Child’s personality </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__row2__item'>
                                <img src = {checkmark} alt = 'checkmark' width = '20' />
                                <p> Showing how influencial your Child can be </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__row2__item'>
                                <img src = {checkmark} alt = 'checkmark' width = '20' />
                                <p> Bringing your child to stardom through fame </p>
                            </div>
                        </li>
                    </ul>


                    <div className = 'brief__row2__text__btn'>
                        <input type = 'button' value = 'Discover More' className = 'btn--primary' />
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default Brief;
