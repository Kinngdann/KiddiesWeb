import React from 'react'
import Gap from '../components/utilities/gap'
import Header from '../components/Header'
import NavBar from '../components/header/navBar'
import About from '../components/About'
import Contact from '../components/Contact'
import Contestants from '../components/Contestants'
import Home from '../components/Home'
import Elite from '../components/Elite'
import Terms from '../components/Terms'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import User from '../components/contestants/user'
import Admin from '../components/Admin'
import AddVotes from '../components/admin/addVotes'
import UploadImage from '../playground'
import ComingSoon from '../components/utilities/comingSoon'
import Whatsapp from '../components/utilities/whatsapp'
// import Footer from '../components/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const Nav = () => {

    return (
        <Router>
            <div>                
                <Gap />
                <Header />
                <NavBar />
                <Whatsapp />
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/elite' component = {Elite} />
                    <Route exact path = '/about' component = {About} />
                    <Route exact path = '/contact' component = {Contact} />
                    <Route exact path = '/contestants' component = {Contestants} />
                    <Route exact path = '/user/:id' component = {User} /> 
                    <Route exact path = '/terms' component = {Terms} />
                    <Route exact path = '/register' component = {Register} />
                    <Route exact path = '/admin' component = {Admin} />
                    <Route exact path = '/admin/:addvotes' component = {AddVotes} />
                    <Route exact path = '/upload' component = {UploadImage} />
                    <Route component = {NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default Nav;

// <Footer />

