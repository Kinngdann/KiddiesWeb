import About from '../components/about'
import Contact from '../components/contact'
import Contestants from '../components/contestants'
import Home from '../components/home'
import Terms from '../components/terms_condition'
import Error from '../components/404'
import Register from '../components/register'
import ProfilePage from '../components/contestants/profilePage'

import Admin from '../components/admin/index'
import EditUserPage from '../components/admin/editProfile'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <Router>
            <div>
                <nav>
                    <NavLink to = '/'> Home </NavLink>
                    <NavLink to = '/about'> About </NavLink>
                    <NavLink to = '/contact'> Contact </NavLink>
                    <NavLink to = '/user'> Contestants </NavLink>
                    <NavLink to = '/terms'> T&C </NavLink>
                    <NavLink to = '/admin'> Admin </NavLink>
                </nav>

                <Switch>
                    <Route exact path = '/' component = {Home} />
                    <Route exact path = '/about' component = {About} />
                    <Route exact path = '/contact' component = {Contact} />
                    <Route exact path = '/user' component = {Contestants} />
                    <Route exact path = '/user/:id' component = {ProfilePage} /> 
                    <Route exact path = '/terms' component = {Terms} />
                    <Route exact path = '/register' component = {Register} />
                    <Route exact path = '/admin' component = {Admin} />
                    <Route exact path = '/admin/edit/:id' component = {EditUserPage} />
                    <Route component = {Error} />
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation;
