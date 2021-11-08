import { Link } from "react-router-dom";
import '../styles/components/header/_headtop.scss'
import tel from './icons/tel.svg'
import mail from './icons/mail.svg'
import location from './icons/location.svg'
import ig from './icons/ig.svg'
import fb from './icons/fb.svg'
import wa from './icons/wa.svg'


const HeadTop = () => {
    return (
        <div className = 'headtop'>
            <div className = 'headtop__text'>

                <div className = 'headtop__text__item'>
                    <img src = {tel} width = '15'/>
                    <h4> +234 803 657 6333 </h4>
                </div>

                <div className = 'headtop__text__item'>
                    <img src = {mail} width = '20'/>
                    <h4> kiddiescrown123@gmail.com </h4>
                </div>

                <div className = 'headtop__text__item'>
                    <img src = {location} width = '13'/>
                    <h4> Suite 102, Balingo Street, Wuse 2 Abuja </h4>
                </div>

            </div>

            <div className = 'headtop__social'>

                <Link to = '/' className = 'headtop__social__icon'> 
                    <img src = {ig} width = '20'/>
                </Link>

                <Link to = '#' className = 'headtop__social__icon'>
                    <img src = {fb} width = '10'/>
                </Link>

                <Link to = '#' className = 'headtop__social__icon'>
                    <img src = {wa} width = '20'/>
                </Link>

            </div>
        </div>
    )
}

export default HeadTop;
