import React from 'react'
import '../styles/components/home/_top5.scss'
import top5 from './pictures/top5.svg'
import gift from './pictures/gift.svg'


const Top5 = () => {
    return (
        <div className = 'top5'>
            <div className = 'top5__col1'>
                <div className = 'top5__col1__img'>
                    <img src = {top5} alt = 'cup-icon' width = '150'/>
                </div>
                <div className = 'top5__col1__text'>
                    <h1 className = 'rmv'> TOP 5 </h1>
                    <h3 className = 'rmv'> GETS </h3>
                    <hr className = 'winner__col1__line' />
                </div>
            </div>

            <div className = 'top5__col2'>
                <img src = {gift} alt = 'crown-icon' className = 'top5__col2__img' />
                <p> Our <span> Top 5 </span> Contestants aren't left out. We've got lots of consolation prizes for them.. </p>
            </div>

            <div className = 'top5__col3'>
            </div>
        </div>
    )
}

export default Top5
