import '../styles/components/home/_winner.scss'

import cup from './pictures/cup.svg'
import gift from './pictures/gift.svg'
import crown from './pictures/crown.svg'


const Winner = () => {
    return (
        <div className = 'winner'>
            <div className = 'winner__col1'>
                <div className = 'winner__col1__img'>
                    <img src = {cup} alt = 'cup-icon' />
                </div>
                <div className = 'winner__col1__text'>
                    <h2>WINNER</h2>
                    <h3>GETS</h3>
                    <hr className = 'winner__col1__line' />
                </div>
            </div>

            <div className = 'winner__col2'>
                <img src = {crown} alt = 'crown-icon' className = 'winner__col2__img' />
                <p> The Winner will be Crowned <br/> <span> “Mr or Miss Crown <br/> 2020/21” </span></p>
            </div>

            <div className = 'winner__col3'>
                <img src = {gift} alt = 'gift-icon' className = 'winner__col3__img'/>
                <p> Cash prize of <br/> <span> N500,000.00 </span>
                an iPad, and other benefits.
                Lots and lots of gifts</p>
            </div>
        </div>
    )
}

export default Winner;
