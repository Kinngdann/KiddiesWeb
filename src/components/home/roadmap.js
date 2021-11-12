import React from 'react'
import '../styles/components/home/_roadmap.scss'
import roadmap from './pictures/roadmap.jpeg'
import icon from './pictures/gift.svg'

const Roadmap = () => {
    return (
        <div className = 'roadmap'>
            <div className = 'roadmap__row1'>
                <h1> Activity Roadmap </h1>
                <h3> How CUTE is your Child? Let's lead you through to the journey </h3>
            </div>

            <div className = 'roadmap__row2'>
                <div className = 'roadmap__row2__col1'>

                    <div className = 'roadmap__row2__col1__item'>
                        <div> 
                            <h3> Register </h3>
                            <p> 
                                Registration gets your child in the competition, thus, making him/her
                                <span> Kiddies Crown Contestant</span>. During registration, make sure to fill out the
                                information correctly.
                            </p>
                        </div>

                        <div className = 'roadmap__row2__col1__item__img'>
                            <img src = {icon} width = '50' alt = '' />
                        </div>
                    </div>

                    <div className = 'roadmap__row2__col1__item'>
                        <div> 
                            <h3> Campaign </h3>
                            <p> 
                                When the contest commences, a unique campaign poster will be sent to you.
                                This campaign poster is intended to help your child campaign for vote from
                                families, friends, loved ones.
                            </p>
                        </div>

                        <div className = 'roadmap__row2__col1__item__img'>
                            <img src = {icon} width = '50' alt = '' />
                        </div>
                    </div>

                </div>

                <div className = 'roadmap__row2__col2'> 
                    <img src = {roadmap} alt = 'little girl' width = '1500'/>
                </div>

                <div className = 'roadmap__row2__col3'>

                   <div className = 'roadmap__row2__col3__item'>
                        <div className = 'roadmap__row2__col3__item__img'>
                            <img src = {icon} width = '50' alt = ''/>
                        </div>

                        <div> 
                            <h3> Vote </h3>
                            <p> 
                                This is indeed a cornerstone to your Child's victory.
                                Campaign and vote as much as you can and command the  
                                <span> STAR</span> in your Child. 
                            </p>
                        </div>
                    </div>

                    <div className = 'roadmap__row2__col3__item'>

                        <div className = 'roadmap__row2__col3__item__img'>
                            <img src = {icon} width = '50' alt = '' />
                        </div>
                        
                        <div> 
                            <h3> Win </h3>
                            <p> 
                                The Winner will be publicly announced when the contest ends.
                                The Winner will be crowned <span>Mr/Miss Crown</span>, cash Prize of <span>N500,000.00</span>, ipad
                                and lots of other benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
