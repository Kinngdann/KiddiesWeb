import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './icons/logo.svg'
import '../styles/components/header/_navbar.scss'

class NavBar extends React.Component {

    constructor(props){
        super()

        this.state = {
            toggle: false
        }
    }

    toggle = () => {
        this.setState({ toggle: !this.state.toggle})
    }

    closeMobileMenu = () => {
        this.setState({ toggle: false })
    }

    render(){
        const { toggle } = this.state;
        return (
            <nav className = 'navbar'>
                <div className = 'navbar__col1'>
                    <img src = {logo} width = '100' alt = 'logo' />
                </div>

                <div className = {!toggle? 'navbar__col2' : 'navbar__col2 navbar--active'}>
                    <div className = 'navbar__col2__container'>
                        <NavLink to = '/' className = 'navbar__col2__link' activeClassName = 'active' exact onClick = {this.closeMobileMenu} > Home </NavLink>
                        <NavLink to = '/contestants' className = 'navbar__col2__link' activeClassName = 'active' exact onClick = {this.closeMobileMenu} > Contestants </NavLink>
                        <NavLink to = '/elites' className = 'navbar__col2__link' activeClassName = 'active' exact onClick = {this.closeMobileMenu} > Elite Board </NavLink>
                        <NavLink to = '/about' className = 'navbar__col2__link' activeClassName = 'active' exact onClick = {this.closeMobileMenu} > About </NavLink>
                        <NavLink to = '/privacy' className = 'navbar__col2__link' activeClassName = 'active' exact onClick = {this.closeMobileMenu} > Privacy </NavLink>
                        <NavLink to = '/pre-register' className = 'navbar__col2__link' exact onClick = {this.closeMobileMenu} > Register </NavLink>
                    </div>
                </div>

                <div className = {!toggle? 'navbar__col3' : 'navbar__col3 toggle'} onClick = {this.toggle}>
                    <div className = 'line1'></div>
                    <div className = 'line2'></div>
                    <div className = 'line3'></div>
                </div>
            </nav>
        )
    }
}
    
export default NavBar;
