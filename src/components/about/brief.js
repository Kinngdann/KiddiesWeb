import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/about/_brief.scss'
import child from './pictures/child.jpeg'

const Brief = () => {
    return (
        <div className = 'brief'>
            <div className = 'brief__col1'>

                <div className = 'brief__col1__title'>
                    <h3> WELCOME TO </h3>
                    <h1> Kiddies Crown </h1>
                </div>

                <div className = 'brief__col1__text'>
                    <p> 
                        Do you think your child is the most beautiful and cutest thing in the world? Yeah, I know right? Being the parent of the cutest child is the most delightful feeling in the world. And that is why we have organized a “Kiddies Crown Contest” for proud parents all around Nigeria to showcase the beauty, influence, and other great qualities of their child.                     
                    </p>

                    <h3> Our Goals </h3>
                    <ul>
                        <li> 
                            <div className = 'brief__col1__item'>
                                <div className = 'bullet'> </div>
                                <p> Bringing out the star in your child </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__col1__item'>
                                <div className = 'bullet'> </div>
                                <p> Supporting your Child’s personality </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__col1__item'>
                                <div className = 'bullet'> </div>
                                <p> Showing how influencial your Child can be </p>
                            </div>
                        </li>

                        <li> 
                            <div className = 'brief__col1__item'>
                                <div className = 'bullet'> </div>
                                <p> Bringing your child to stardom through fame </p>
                            </div>
                        </li>
                    </ul>


                    <div className = 'brief__row2__text__btn'>
                        <Link to = '/privacy'> <input type = 'button' value = 'Discover More' className = 'btn--primary'/> </Link>
                    </div>
            
                </div>
            </div>

            <div className = 'brief__col2'>
                <img src = {child} alt = 'girl child' width = '600'/>
            </div>
        </div>
    )
}

export default Brief;

