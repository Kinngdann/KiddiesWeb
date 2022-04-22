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
                    <img src = {tel} width = '15' alt = 'phone icon'/>
                    <h4> +234 802 441 8127 </h4>
                </div>

                <div className = 'headtop__text__item'>
                    <img src = {mail} width = '20' alt = 'email icon' />
                    <h4> kiddiescrown123@gmail.com </h4>
                </div>

                <div className = 'headtop__text__item'>
                    <img src = {location} width = '13' alt = 'address icon' />
                    <h4> 27b, Limpopo Street, Maitama, Abuja - FCT </h4>
                </div>

            </div>

            <div className = 'headtop__social'>
                <a href = 'https://www.instagram.com/kiddiescrown123/'>
                    <img src = {ig} width = '15' alt = 'social icon' className = 'headtop__social__icon'/>
                </a>

                <a href = 'https://web.facebook.com/kiddiescrown123'>
                    <img src = {fb} width = '8' alt = 'social icon' className = 'headtop__social__icon'/>
                </a>

                {/*<a href = 'https://wa.me/message/TL45QZQF2XXLE1' >
                    <img src = {wa} width = '15' alt = 'social icon' className = 'headtop__social__icon'/>
                </a>*/}
            </div>
        </div>
    )
}

export default HeadTop;
