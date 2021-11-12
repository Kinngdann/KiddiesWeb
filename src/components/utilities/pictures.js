import React from 'react'
import '../styles/helpers/_pictures.scss'
import pic1 from './images/cutie.jpeg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
import pic4 from './images/pic4.jpeg'




const Pictures = () => {
    return (
        <div className = 'pictures'>
            <div className = 'pictures__row1' >
                <div className = 'pic1'> <img src = {pic1} alt = 'baby' width = '300' /> </div>
                <div className = 'pic2'> <img src = {pic2} alt = 'baby' width = '200' /> </div>
            </div>

            <div className = 'pictures__row2'>
                <div className = 'pic3'> <img src = {pic3} alt = 'baby' width = '250' /> </div>
                <div className = 'pic4'> <img src = {pic4} alt = 'baby' width = '300' /> </div>
            </div>
        </div>
    )
}

export default Pictures
