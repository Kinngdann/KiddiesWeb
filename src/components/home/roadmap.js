import React from 'react'
import '../styles/components/home/_roadmap.scss'
import child from './pictures/child.jpeg'
import icon from './pictures/gift.svg'

const roadmap = () => {
    return (
        <div className = 'roadmap'>
            <div className = 'roadmap__row1'>
                <h2> Activities Roadmap</h2>
                <p> this is a brief description</p>
            </div>

            <div className = 'roadmap__row2'>
                <div className = 'roadmap__row2__col1'>

                    <div className = 'roadmap__row2__col1__item'>
                        <div> 
                            <h3> Registration </h3>
                            <p> 
                                decription
                                this is a brief description
                                this is a brief description
                                this is a brief description
                                this is a brief description
                            </p>
                        </div>

                        <div className = 'roadmap__row2__col1__item__img'>
                            <img src = {icon} width = '50' />
                        </div>
                    </div>

                    <div className = 'roadmap__row2__col1__item'>
                        <div> 
                            <h3> Campaign </h3>
                            <p> 
                                decription
                                this is a brief description
                                this is a brief description
                                this is a brief description
                                this is a brief description
                            </p>
                        </div>

                        <div className = 'roadmap__row2__col1__item__img'>
                            <img src = {icon} width = '50' />
                        </div>
                    </div>

                </div>

                <div className = 'roadmap__row2__col2'> 
                    <img src = {child} alt = 'little girl' width = '500'/>
                </div>

                <div className = 'roadmap__row2__col3'>

                   <div className = 'roadmap__row2__col3__item'>
                        <div className = 'roadmap__row2__col3__item__img'>
                            <img src = {icon} width = '50' />
                        </div>

                        <div> 
                            <h3> Vote </h3>
                            <p> 
                                decription 
                                decription
                                this is a brief description
                                this is a brief description
                                this is a brief description
                                this is a brief description
                            </p>
                        </div>
                    </div>

                    <div className = 'roadmap__row2__col3__item'>
                        <div className = 'roadmap__row2__col3__item__img'>
                            <img src = {icon} width = '50' />
                        </div>
                        
                        <div> 
                            <h3> Win </h3>
                            <p> 
                                decription 
                                decription
                                this is a brief description
                                this is a brief description
                                this is a brief description
                                this is a brief description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmap
