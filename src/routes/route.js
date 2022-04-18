import React from 'react'
import Signin from '../components/admin/authentication/signin'
import ProtectedRoute from '../components/admin/authentication/protectedRoute'
import Gap from '../components/utilities/gap'
import Header from '../components/Header'
import NavBar from '../components/header/navBar'
import About from '../components/About'
import Contestants from '../components/Contestants'
import Home from '../components/Home'
import Elite from '../components/Elite'
// import Terms from '../components/Terms'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import PreRegister from '../components/register/preRegister';
import User from '../components/contestants/user'

import Admin from '../components/Admin'
import ComingSoon from '../components/utilities/comingSoon'
import Whatsapp from '../components/utilities/whatsapp'
import Footer from '../components/footer/footer'
import Privacy from '../components/Privacy'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

const Nav = () => {

    return (
        <Router>
            <div>
                <Gap />
                <Header />
                <NavBar />
                <Whatsapp />
                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route exact path = '/elites' component = {Elite} />
                    <Route exact path = '/about' component = {About} />
                    <Route exact path = '/contestants' component = {Contestants} />
                    <Route exact path = '/contestant/:id' component = {User} /> 
                    <Route exact path = '/terms' component = {ComingSoon} />
                    <Route exact path = '/privacy' component = {Privacy} />
                    <Route exact path = '/register' component = {Register} />
                    <Route exact path = '/pre-register' component = {PreRegister} />
                    <Route exact path = '/signin' component = {Signin} />
                    <ProtectedRoute exact path = '/admin' component = {Admin} />
                    <Route component = {NotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Nav;


