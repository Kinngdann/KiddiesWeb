import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/about/_brief.scss'
import child from './pictures/child.jpeg'


// About the Contest

// Kiddies Crown Contest is a kiddies competition that is centered around the love a mother shares with her Child. We created this platform to help parents prove to the world how much they love their child and how far they're willing to go for them. This contest also help showcase the great qualities of a child.

// Kiddies Crown Contest will be held virtually (on our website) which will allow contestants within the bounds of Nigeria to participate and contest for the Mr/Miss Crown 2021/2022 and also stand a chance to win great prizes.

// Participation in the contest constitutes acceptance of the Kiddies Crown Contest’s rules.

// Eligibility

// Interested candidates must meet the following to be eligible for the Kiddies Crown Contest.
// 	Contestants must be in the range of 0 to 10 years of age.
// 	Birth certificate of the contestant could be requested for during the contest.
// 	The contestant will be sole owner of the rights, title and interest submitted in participation of the contest.
// 	By participating in the contest, the parents/guardian hereby warrant that all information submitted (during registration) is true and correct and have full rights of the image uploaded and shall not constitute a breach of any third party’s copyright or other intellectual property rights.
// 	The Organization reserve the right, in their sole discretion, to disqualify any entrant should such an entrant at any stage supply untruthful, incomplete, inaccurate or misleading personal details and/or information.

// Feed A Child Program

// Kiddies Crown Limited is a private company that is centered around children and is aimed at giving better lives and bringing out potentials in children.

// One of our core value has always been having the poor Nigerian/homeless Children in our heart. We’re a fully fletched private company but are keen to giving a better life to poor Nigerian children. 

// Kiddies Crown run a program that we tag “Feed a homeless child” where we make provisions of prepared foods and distribute it amongst homeless / less fortunate children. This ensure that poor children are given healthy food and supplies especially in this difficult times.




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
                        Kiddies Crown Contest is a kiddies competition that is centered around the love a mother shares with her Child. We created this platform to help parents prove to the world how much they love their child and how far they're willing to go for them. This contest also help showcase the great qualities of a child.
                        Kiddies Crown Contest will be held virtually (on our website) which will allow contestants within the bounds of Nigeria to participate and contest for the Mr/Miss Crown 2021/2022 and also stand a chance to win great prizes.
                        Participation in the contest constitutes acceptance of the Kiddies Crown Contest’s rules.
                    </p>

                    <h3> Eligibility</h3>
                    <p>
                        Interested candidates must meet the following to be eligible for the Kiddies Crown Contest.
                    </p>
                    <ol>
                        <li>Contestants must be in the range of 0 to 10 years of age.</li>
                        <li>Birth certificate of the contestant could be requested for during the contest.</li>
                        <li>The contestant will be sole owner of the rights, title and interest submitted in participation of the contest.</li>
                        <li>By participating in the contest, the parents/guardian hereby warrant that all information submitted (during registration) is true and correct and have full rights of the image uploaded and shall not constitute a breach of any third party’s copyright or other intellectual property rights.</li>
                        <li>The Organization reserve the right, in their sole discretion, to disqualify any entrant should such an entrant at any stage supply untruthful, incomplete, inaccurate or misleading personal details and/or information.</li>
                    </ol>

                    <h3> Feed A Child Program </h3>
                    <p>
                        Kiddies Crown Limited is a private company that is centered around children and is aimed at giving better lives and bringing out potentials in children.
                        One of our core value has always been having the poor Nigerian/homeless Children in our heart. We’re a fully fletched private company but are keen to giving a better life to poor Nigerian children. 
                        Kiddies Crown run a program that we tag “Feed a homeless child” where we make provisions of prepared foods and distribute it amongst homeless / less fortunate children. This ensure that poor children are given healthy food and supplies especially in this difficult times.
                    </p>


                    <h3> Our Aims </h3>
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

